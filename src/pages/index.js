import React from 'react'
import { Link, graphql } from "gatsby";
import Layout from '../components/Layout'
import parse from "html-react-parser";
import { GatsbyImage } from "gatsby-plugin-image";

import Bio from "../components/bio";
import Seo from "../components/seo";
import PostList from '../components/PostList'

const HomePage = ({ data }) => {

  const posts = data.allWpPost.nodes;

  return (
    <Layout>
    <div>
    <img src="" alt="" />
    <h1>Labyrinth Resrouce Group</h1>
    <h4>Encouraging the creation and use of Labyrinths as part of healing, inspiration, and peace</h4>
    <hr/>
    </div>
    <h2>Upcoming Event</h2>
    <h2>Recent Events</h2>
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
                  {/* Add more elements as needed */}
                </article>
              </li>
            )
          );
        })}
      </ol>

      <h3>Check out our archive of events {' '}
        <Link to='/events' style={{ textDecoration: 'underline' }}>here.</Link></h3>

    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query AllPosts {
    allWpPost(sort: { fields: [date], order: DESC}, limit: 5) {
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