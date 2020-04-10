import React from "react"
import { graphql } from "gatsby"
const Post = ({ data }) => {
    console.log(data);
  return (
      <div />
  )
}
export default Post
export const pageQuery = graphql`
query MyQuery {
    prismic {
      allProducts {
        edges {
          node {
            product_name
          }
        }
      }
    }
  }
  
`