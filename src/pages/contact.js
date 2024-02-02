import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import parse from "html-react-parser";

import Layout from '../components/Layout'


const ContactPage = () => {

 const data = useStaticQuery(graphql`
  query {
    allWpPage(filter: { id: { eq: "cG9zdDoxOTU=" } }) {
      nodes {
        id
        title
        uri
        content
      }
    }
  }
  `);

  const contactData = data.allWpPage.nodes[0]

  return (
    <Layout>
    <div>
    <div className="title-container">
        <h1 className="title-text">Contact</h1>
      </div>
      <div>{parse(contactData.content)}</div>
    </div>

    </Layout>
  )
}

export default ContactPage