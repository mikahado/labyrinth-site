import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ isHomePage }) => {


  return (
    <div>
      <header className="global-header">
        <div class="banner-container">
        <StaticImage
        className="banner-container"
        src="../images/3-people-LRG.jpg"
        alt="Labyrinth Resource Group Banner"
    />
    </div>
      </header>
    </div>
  );
};

export default Header;
