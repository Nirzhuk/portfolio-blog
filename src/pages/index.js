import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlitchText from "../components/GlitchText"
import "./indexPage/style.scss";
class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`Index Page`}
          keywords={[`Nirzhuk`,
            `Blog`,
            `JavaScript Developer`,
            `React Developer`,
            `Fullstack Developer`,
            `Freelancer`,
            `Unity Developer`,
            `Game Developer`,
          ]}
        />
        <GlitchText size="24px"> Glitchy:: </GlitchText>


      </Layout>
    )
  }
}

export default IndexPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`