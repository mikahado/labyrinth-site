import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Navigation from "./Navigation"
import Header from "./Header"

const Layout = ({ isHomePage, children }) => {
  const [isNavVisible, setIsNavVisible] = useState(true)

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible)
  }

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header />
      
      <button className="show-hide-button" onClick={toggleNavVisibility}>
        {isNavVisible ? "Menu" : "Menu"}
      </button>

      {isNavVisible && <Navigation />}

      <div>
        <main>{children}</main>
      </div>

      <footer>
        <p>
        Encouraging the creation and use of Labyrinths as part of healing, inspiration, and peace
        </p>
        © {new Date().getFullYear()} Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        and <a href="https://wordpress.org/">WordPress</a>
        {` `}
        by <a href="https://www.linkedin.com/in/mdharrell//">Michael Harrell</a>
      </footer>
    </div>
  )
}

export default Layout
