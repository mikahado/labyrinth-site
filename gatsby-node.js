const path = require(`path`);
const chunk = require(`lodash/chunk`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query all WordPress posts
  const resultPosts = await graphql(`
    query WpPosts {
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }
          post: node {
            id
            uri
          }
          next {
            id
          }
        }
      }
    }
  `);

  // Query all WordPress pages
  const resultPages = await graphql(`
    query WpPages {
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `);

  if (resultPosts.errors || resultPages.errors) {
    throw resultPosts.errors || resultPages.errors;
  }

  // Create pages for WordPress posts
  const posts = resultPosts.data.allWpPost.edges;
  await createIndividualBlogPostPages({ posts, createPage });

  // Create pages for WordPress pages
  const pages = resultPages.data.allWpPage.nodes;
  pages.forEach(page => {
    const pagePath = page.uri || `/alternative-path/${page.id}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/page.js`), // Assuming you have a page.js template
      context: {
        id: page.id,
      },
    });
  });

  // And a paginated archive for posts
  await createBlogPostArchive({ posts, createPage });
};

/**
 * This function creates all the individual blog pages for posts
 */
const createIndividualBlogPostPages = async ({ posts, createPage }) => {
  return Promise.all(
    posts.map(({ previous, post, next }) =>
      createPage({
        path: post.uri,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          id: post.id,
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  );
};

/**
 * This function creates a paginated archive for posts
 */
const createBlogPostArchive = async ({ posts, createPage }) => {
  const graphqlResult = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `);

  const { postsPerPage } = graphqlResult.data.wp.readingSettings;
  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage);

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1;

      await createPage({
        path: index === 0 ? "/post-archive" : `/post-archive/${pageNumber}`,
        component: path.resolve(`./src/templates/post-archive.js`),
        context: {
          offset: index * postsPerPage,
          postsPerPage,
          nextPagePath: index < totalPages - 1 ? `/post-archive/${pageNumber + 1}` : null,
          previousPagePath: index > 1 ? `/post-archive/${pageNumber - 1}` : null,
        },
      });
    })
  );
};
