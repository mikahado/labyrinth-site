import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import parse from "html-react-parser";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../components/seo";

const LabyrinthLocator = ({ data }) => {
  const posts = data.allWpPost.nodes;

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <p>No posts found.</p>
      </Layout>
    );
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />

      <div className="title-container">
        <h1 className="title-text">Labyrinths</h1>
      </div>
      <p>Find a labyrinth.</p>
      


      <h4>A database of labyrinths in the American Southwest</h4>
      <hr></hr>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title || "Untitled Post";

          return (
            title && (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <small>{post.date}</small>
                  </header>

                  <div>{parse(String(post.content))}</div>

                  {post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData && (
                    <GatsbyImage
                      image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                      alt={post.featuredImage.node.alt || ""}
                    />
                  )}

                </article>
              </li>
            )
          );
        })}
      </ol>

      {/* <ul>
  <li>Classic Labyrinth</li>
  <li>Medieval Labyrinth</li>
  <li>Chartres Labyrinth</li>
  <li>Baltic Labyrinth</li>
  <li>Indian Labyrinth</li>
  <li>Cretan Labyrinth</li>
  <li>Turkish Labyrinth</li>
  <li>Scandinavian Labyrinth</li>
  <li>Hopi Labyrinth</li>
  <li>Roman Labyrinth</li>
  <li>Man in the Maze Labyrinth</li>
  <li>Seven-Circuit Labyrinth</li>
  <li>Eleven-Circuit Labyrinth</li>
  <li>Stone Labyrinth</li>
  <li>Forest Labyrinth</li>
  <li>Desert Labyrinth</li>
  <li>Mountain Labyrinth</li>
  <li>Water Labyrinth</li>
  <li>City Labyrinth</li>
  <li>Mirror Labyrinth</li>
  <li>Ice Labyrinth</li>
  <li>Lava Labyrinth</li>
  <li>Crystal Labyrinth</li>
  <li>Haunted Labyrinth</li>
  <li>Underwater Labyrinth</li>
  <li>Space Labyrinth</li>
  <li>Time Warp Labyrinth</li>
  <li>Maze of Illusions</li>
  <li>Minotaur's Lair Labyrinth</li>
  <li>Virtual Reality Labyrinth</li>
  <li>Steampunk Labyrinth</li>
  <li>Alien Labyrinth</li>
  <li>Enchanted Forest Labyrinth</li>
  <li>Cyber Labyrinth</li>
  <li>Mystical Labyrinth</li>
  <li>Spiritual Labyrinth</li>
  <li>Futuristic Labyrinth</li>
  <li>Pixel Art Labyrinth</li>
  <li>Amethyst Labyrinth</li>
  <li>Bamboo Labyrinth</li>
  <li>Glow-in-the-Dark Labyrinth</li>
  <li>Abstract Labyrinth</li>
  <li>Starlight Labyrinth</li>
  <li>Aquarium Labyrinth</li>
  <li>Chocolate Labyrinth</li>
  <li>Golden Labyrinth</li>
</ul> */}


    </Layout>
  );
};

export const query = graphql`
query CombinedQuery {

  allWpPost(
    filter: { categories: { nodes: { elemMatch: { slug: { eq: "labyrinths" } } } } }
  ) {
    nodes {
      id
      title
      uri
      content
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}
`

export default LabyrinthLocator;
