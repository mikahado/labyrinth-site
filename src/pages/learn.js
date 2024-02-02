import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import parse from "html-react-parser";
import Layout from '../components/Layout'
import NavigationLearn from '../components/NavigationLearn'

const LearnPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allWpPage(filter: { id: { eq: "cG9zdDoxNDk=" } }) {
        nodes {
          id
          title
          uri
          content
        }
      }
    }
  `);
  
  const learnData = data.allWpPage.nodes[0]; 

  console.log(learnData)

  return (
    <Layout>
    <div className="title-container">
      <h1 className="title-text">Learn</h1>
    </div>
    <div>
      <NavigationLearn />
    </div>
    <div className="lrg-content">{parse(learnData.content)}</div>
  </Layout>
  )
}

export default LearnPage