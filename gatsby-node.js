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
      allPages {
        edges {
          node {
            _meta {
              uid
            }
            body {
              ... on PRISMIC_PageBodyText_block {
                primary {
                  text_block_content
                  text_block_title
                }
              }
              ... on PRISMIC_PageBodyImage_grid {
                type
                primary {
                  columns
                }
                fields {
                  title
                }
              }
            }
            page_text
            page_title
          }
        }
      }
    }
  }
  
  `)
  const template = path.resolve('src/templates/page.js')
  console.log(pages);
  console.log(pages.data);
  pages.data.prismic.allPages.edges.forEach(edge => {

    let page_path = '/'+edge.node._meta.uid;
    if(edge.node._meta.uid === 'index') {
      page_path = '/';
    }

    console.log('page_path');
    console.log(page_path);

    createPage({
      path: `${page_path}`,
      component: template,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
