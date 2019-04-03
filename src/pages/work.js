import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./indexPage/style.scss";

class WorkPage extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
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
        <h1 style={"color:#fff"}>WorkPage</h1>
      </Layout>
    )
  }
}

export default WorkPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`