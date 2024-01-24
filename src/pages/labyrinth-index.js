import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const LabyrinthIndex = ({ data }) => {
  // Extract content from the GraphQL query response
  const labyrinthContent = data.allWpPage.nodes[0]?.content;
  
  return (
    <Layout>
      <div className="labyrinth-locator-container">
        <h1>Labyrinth Index</h1>
        <div
          className="background-image"
          style={{ backgroundImage: 'url("path/to/your/image.jpg")' }}
        ></div>
        <div dangerouslySetInnerHTML={{ __html: labyrinthContent }} />
      </div>
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
