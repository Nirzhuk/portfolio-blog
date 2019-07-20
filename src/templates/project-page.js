import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { date, title, techs } = post.frontmatter;
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} description={post.excerpt} />
        <h1>{title}</h1>
        <p>
          {date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>{techs}</p>
      </Layout>
    )
  }
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        techs
      }
    }
  }
`
