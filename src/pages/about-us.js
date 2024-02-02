import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import parse from "html-react-parser";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
       query {
      allWpPage(filter: { id: { eq: "cG9zdDoyOTA3" } }) {
        nodes {
          id
          title
          uri
          content
        }
      }
    }
  `);

  const aboutData = data.allWpPage.nodes[0]; 
  console.log(aboutData)

  return (
    <Layout>
      <div className="title-container">
        <h1 className="title-text">About LRG</h1>
      </div>
      <hr/>
  
<div className="lrg-content">{parse(aboutData.content)}</div>
    </Layout>
  );
};

export default AboutPage;
