import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  // Use the useStaticQuery hook to execute the GraphQL query
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

  // Log the data to the console
  console.log(data);

  return (
    <Layout>
      <h1>About Page</h1>
      {/* Add your about page content here */}
    </Layout>
  );
};

export default AboutPage;
