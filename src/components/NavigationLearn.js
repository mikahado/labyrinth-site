import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"


const NavigationLearn = () => {
  
  return (
    <div>
      <nav class="global-nav">
        <Link to="/">What is a Labyrinth</Link>
        <Link to="/">Resources</Link>
        <Link to="/">For Kids</Link>
    </nav>
    <hr/>
    <br/>
    </div>
  )
}

export default NavigationLearn