import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"


const Navigation = () => {
  
  return (
    <div>
      <nav class="global-nav">
        <Link to="/about-us">About</Link>
        <Link to="/labyrinth-locator">Labyrinth Locator</Link>
        <Link to="/events">Events</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/contact">Contact Us</Link>
    </nav>
    </div>
  )
}

export default Navigation