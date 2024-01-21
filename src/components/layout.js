import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Navigation from "./Navigation"
import Header from "./Header"

const Layout = ({ isHomePage, children }) => {


  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
     <Header />

      <div>
        <Navigation />
    <main>{children}</main>
  </div>



      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
        {` `}
         by <a href="https://www.linkedin.com/in/mdharrell//">Michael Harrell</a>
      </footer>

    </div>
  )
}

export default Layout
