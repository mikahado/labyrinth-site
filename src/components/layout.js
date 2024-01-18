import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {/* {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )} */}
        
      </header>

      <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* Add more navigation links as needed */}
    </nav>
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
