import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
// import Logo from '../../images/logo.svg'

const Header = ( {isHomePage}) => {
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
    <div>
       <header className="global-header">
       <h1>Labyrinth Resrouce Group</h1>
      </header>
    </div>
  )
}

export default Header