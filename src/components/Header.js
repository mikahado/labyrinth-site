import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const Header = ({ isHomePage }) => {
  const bannerData = useStaticQuery(graphql`
    query MyQuery {
      allWpMediaItem(filter: { id: { eq: "cG9zdDoxODc4" } }) {
        edges {
          node {
            id
            sourceUrl
          }
        }
      }
    }
  `);

  const bannerUrl = bannerData.allWpMediaItem.edges[0]?.node.sourceUrl;

  return (
    <div>
      <header className="global-header">
        <div className="banner-container">
          {bannerUrl && <img src={bannerUrl} alt="Banner" />}
        </div>
      </header>
    </div>
  );
};

export default Header;
