import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const LabyrinthIndex = ({ data }) => {
  // Extract content from the GraphQL query response
  const labyrinthContent = data.allWpPage.nodes[0]?.content;
  

  return (
    <Layout>
      <h1>Original Labyrinth Index</h1>
      <div dangerouslySetInnerHTML={{ __html: labyrinthContent }} />
    </Layout>
  );
};

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/find-a-labyrinth/" } }) {
      nodes {
        id
        uri
        content
      }
    }
  }
`

export default LabyrinthIndex;
