import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, data: post }) => {
  const posts = data.allWpPost.nodes
  
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>
          No posts found. 
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <Bio />
      <h2>Archive of LGR posts</h2>
      <ol style={{ listStyle: `none` }}>

        {posts.map(post => {
          const title = post.title || "Untitled Post"

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

                </article>
              </li>
            )
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        excerpt
        uri
        content
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
