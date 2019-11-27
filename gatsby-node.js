const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'DataJson') {
    console.group('json node')
    createNodeField({
      node,
      name: 'testttt',
      value: 'test',
    })
  }
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
