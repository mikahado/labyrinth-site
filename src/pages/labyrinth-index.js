import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import parse from "html-react-parser";
import { GatsbyImage } from "gatsby-plugin-image";

import Bio from "../components/bio";
import Seo from "../components/seo";

const LabyrinthIndex = ({ data }) => {
  const posts = data.allWpPost.nodes;

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>No posts found.</p>
      </Layout>
    );
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <h1>Labyrinth Locator</h1>
      <h4>A growing database of labyrinths in the New Mexico</h4>
      <hr></hr>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title || "Untitled Post";

          return (
            title && (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <small>{post.date}</small>
                  </header>

                  <div>{parse(String(post.content))}</div>

                  {post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData && (
                    <GatsbyImage
                      image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                      alt={post.featuredImage.node.alt || ""}
                    />
                  )}

                </article>
              </li>
            )
          );
        })}
      </ol>
    </Layout>
  );
};

export const query = graphql`
query AllPosts {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "labyrinths"}}}}}
  ) {
    nodes {
      id
      title
      uri
      content
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}
`

export default LabyrinthIndex;
