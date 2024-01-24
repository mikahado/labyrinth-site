import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Navigation from './Navigation'
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

       <sm>
          Encouraging the creation and use of Labyrinths as part of healing, inspiration, and peace.
        </sm>
        <hr/>
        <Navigation />
        <hr/>
      </header>
    </div>
  )
}

export default Header