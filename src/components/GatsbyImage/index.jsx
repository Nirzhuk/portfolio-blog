import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

function specialFormat(file) {
  return !file.node.childImageSharp && (file.node.extension === 'gif' || file.node.extension === 'svg');
}

function renderImage(file) {
  if (specialFormat(file)) {
    console.log("gif")
    return <img src={file.node.publicURL} />
  }
  else {
    console.log("noGif", file.node)
    return <Img fluid={{ ...file.node.childImageSharp.fluid, aspectRatio: 0 }} />
  }

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
            publicURL
          }
        }
      }  
    }

`
export default GatsbyImage

