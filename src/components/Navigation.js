import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"


const Navigation = () => {
  
  return (
    <div>
      <nav class="global-nav">
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/labyrinth-locator">Labyrinths</Link>
        <Link to="/events">Events</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/contact">Contact Us</Link>
    </nav>
    <hr/>
    <br/>
    </div>
  )
}

export default Navigation