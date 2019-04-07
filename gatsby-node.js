const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { generator } = require('./src/gastby/PageGenerators');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const portfolioPage = path.resolve(`./src/templates/project-page.js`)
  return graphql(
    `{
      getPost: allMarkdownRemark(
        sort:  {order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "/content/blog/.*.md$/"}},
        limit: 1000) {
        edges {
          node {
          fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      getPortfolio: allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "content/portfolio/.*.md$/"}}) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              desc
            }
          }
        }
      }
    }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const postEdges = result.data.getPost.edges;
    const portfolioEdges = result.data.getPortfolio.edges;

    const posts = postEdges;
    const projects = portfolioEdges;

    projects.forEach((project, index) => {
      generator({
        type: createPage,
        node: project,
        template: portfolioPage,
        config: { prefix: 'project' }
      })
    })
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const pagination = { next, previous }
      generator({
        type: createPage,
        node: post,
        template: blogPost,
        extraContext: { pagination },
        config: { prefix: 'blog' }
      })
    })

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
