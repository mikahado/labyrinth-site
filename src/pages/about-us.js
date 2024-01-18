import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

const AboutPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allWpPage {
        nodes {
          id
          uri
          content
        }
      }
    }
  `);

  console.log(data)


  return (
    <Layout>
      <h1>About Page</h1>
      {/* Add your about page content here */}
    </Layout>
  );
};

export default AboutPage;