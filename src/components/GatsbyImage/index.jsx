import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'


function renderImage(file) {
    return <Img fluid={{ ...file.node.childImageSharp.fluid, aspectRatio: 0 }} />
}
const GatsbyImage = function (props) {
    return (
        <StaticQuery
            query={showCaseImageQuery}
            render={({ assets }) =>
                renderImage(
                    assets.edges.find(image => image.node.relativePath === props.src)
                )
            }
        />
    )
}


const showCaseImageQuery = graphql`
  query {
    assets: allFile(
        filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
    ) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }  
    }

`
export default GatsbyImage