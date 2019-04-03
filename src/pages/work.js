import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from '../containers/workPage/Content';
import "../containers/indexPage/style.scss";

class WorkPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`Work Page`}
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
        <Content />
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