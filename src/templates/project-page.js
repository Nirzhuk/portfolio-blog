import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import GlitchText from "../components/GlitchText";
import SEO from "../components/seo";
import styled from "styled-components";
import ContentContainer from "../components/StyledComponents/ContentContainer";
import CustomLink from "../components/Link";

class ProjectPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { link, title, techs, desc } = post.frontmatter;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} description={post.excerpt} />
        <ContentContainer>
          <h1
            style={{
              marginBottom: "20px",
            }}
          >
            {title} -~-{" "}
          </h1>
          <CustomLink size={"14px"} href={link}>
            Link to the App
          </CustomLink>
          <p
            style={{
              width: "50vw",
              textAlign: "justify",
              marginTop: "20px",
              color: "white",
            }}
          >
            {desc}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div style={{ marginTop: "20px" }}>
            <GlitchText>TECHS:</GlitchText>
            <TechContainer>
              <p>{techs}</p>
            </TechContainer>
          </div>
        </ContentContainer>
      </Layout>
    );
  }
}

export default ProjectPageTemplate;

const TechContainer = styled.div`
  text-align: center;
  display: flex;
  align-content: center;
  align-items: center;
  background: rgba(17, 17, 27, 0.8);
  background-image: radial-gradient(rgba(255, 255, 255, 0.3) 5%, transparent 0);
  background-size: 24px 24px;
  padding: 15px;
  height: 40px;
  width: 500px;
  border: 1px solid rgb(52, 120, 231, 0.8);
  border-radius: 12px;
  color: white;
`;

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
        link
        desc
        techs
      }
    }
  }
`;
