const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }

  if (node.internal.type === 'DataJson') {
    console.group('json node')
    createNodeField({
      node,
      name: 'testttt',
      value: 'test',
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const markdownRes = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  markdownRes.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const blogContentfulTemplate = path.resolve(
    './src/templates/blog-contentful.js'
  )

  const contentfulRes = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  contentfulRes.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogContentfulTemplate,
      path: `/blog-contentful/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SiteContent implements Node @dontInfer {
      id: Integer!
      slug: String!
      title: String!
      description: String!
      owner: String!
      creationDate: Date
    }
  `
  createTypes(typeDefs)
}
