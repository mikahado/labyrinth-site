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

  return (
    <Layout>
      <div className="title-container">
        <h1 className="title-text">About LRG</h1>
      </div>
      <div>{parse(aboutData.content)}</div>
    </Layout>
  );
};

export default AboutPage;
