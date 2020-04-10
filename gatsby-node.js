/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
        prismic {
            allProducts {
              edges {
                node {
                  photo_date
                  photo_location
                  photo_story_text
                  photo_story_title
                  product_description
                  product_name
                  product_sku
                }
              }
            }
          }
    }
  `)
  const template = path.resolve('src/templates/post.jsx')
  console.log(pages);
  pages.data.prismic.allProducts.edges.forEach(edge => {
      console.log(edge);
    createPage({
      path: `/${edge.node.product_sku}`,
      component: template,
      context: {
        uid: edge.node.product_sku,
      },
    })
  })
}
