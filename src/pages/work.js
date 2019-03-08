import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../containers/indexPage/style.scss";

class WorkPage extends React.Component {
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
                <h1>WorkPage</h1>
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