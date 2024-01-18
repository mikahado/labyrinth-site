import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import { useStaticQuery } from 'gatsby';

const LabyrinthIndex = () => {
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

  return (
    <Layout>
      <div>
        <img src="" alt="" />
        <h1>Labyrinth Locator</h1>
        <h4>Encouraging the creation and use of Labyrinths as part of healing, inspiration, and peace</h4>
      </div>
    </Layout>
  );
};

export default LabyrinthIndex;
