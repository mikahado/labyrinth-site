import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const PageTemplate = ({ data: { page } }) => {
  const featuredImage = {
    data: page.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: page.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={page.title} description={page.excerpt} />

      <article
        className="page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(page.title)}</h1>

          {/* if we have a featured image for this page let's display it */}
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!page.content && (
          <section itemProp="articleBody">{parse(page.content)}</section>
        )}

        <hr />

        <footer>
          {/* Add footer content if needed */}
        </footer>
      </article>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`
