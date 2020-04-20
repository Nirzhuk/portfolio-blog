import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import GlitchText from "../components/GlitchText";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentContainer from "../components/StyledComponents/ContentContainer";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={["blog", "gatsby", "javascript", "react"]}
        />
        <ContentContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <PostInfo key={node.fields.slug}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`blog${node.fields.slug}`}
                >
                  <GlitchText linkable>{title}</GlitchText>
                </Link>

                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </PostInfo>
            );
          })}
        </ContentContainer>
      </Layout>
    );
  }
}
const PostInfo = styled.div`
  margin-bottom: 15px;
`;

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/.*.md$/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
