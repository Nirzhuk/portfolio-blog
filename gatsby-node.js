const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `{
      getPost: allMarkdownRemark(sort:  {order: DESC, fields: [frontmatter___date]},
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
      getPortfolio: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "content/portfolio/.*.md$/"}}) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
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
    // Create blog posts pages.
    const posts = postEdges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
