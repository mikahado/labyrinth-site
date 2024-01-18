
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';


const useMenuQuery = () => {

    const pageData = useSTaticQuery(graphql)`
    query allPages {
        allWpPage {
          nodes {
            id
            uri
            content
          }
        }
      }
    `

  return data
}

export default useMenuQuery