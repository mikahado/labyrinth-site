import React from "react";
import { Link, graphql } from "gatsby";
import parse from "html-react-parser";
import { GatsbyImage } from "gatsby-plugin-image";

import Bio from "../components/bio";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const EventsPage = ({ data }) => {
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
      <h2>Archive of Events</h2>
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

                  {/* <div>{parse(String(post.content))}</div> */}

                  {/* {post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData && (
                    <GatsbyImage
                      image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                      alt={post.featuredImage.node.alt || ""}
                    />
                  )} */}
                  {/* Add more elements as needed */}
                </article>
              </li>
            )
          );
        })}
      </ol>
    </Layout>
  );
};

export default EventsPage;

export const query = graphql`
  query AllPosts {
    allWpPost(sort: { fields: [date], order: DESC }) {
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
`;
