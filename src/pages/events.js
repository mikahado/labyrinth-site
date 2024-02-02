import React from "react";
import { Link, graphql } from "gatsby";
import parse from "html-react-parser";

import Layout from "../components/Layout";
import Seo from "../components/seo";

const EventsPage = ({ data }) => {
  const posts = data.allWpPost.nodes;

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <p>No posts found.</p>
      </Layout>
    );
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <div className="title-container">
    
        <h1 className="title-text">Events</h1>
    
      </div>
      <h4> Walk with us! </h4>
      <hr/>
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
  allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "events"}}}}}) {
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
