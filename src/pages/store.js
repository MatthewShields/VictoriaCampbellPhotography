import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout'
import StoreItem from "../components/storeItem"

class Store extends Component {
  render() {
    const { data } = this.props;
    console.log(data);

    const products = {};

    data.skus.edges.map(function(sku) {
      if(products.hasOwnProperty(sku.node.product.id)) {
        products[sku.node.product.id].push(sku);
      } else {
        products[sku.node.product.id] = [];
        products[sku.node.product.id].push(sku);
      }
    })

    console.log(products);

    return (
      <Layout>
        {data.prismic.allProducts.edges.map(product => (
          <StoreItem key={product.node.product_sku} item={product} image={products[product.node.product_sku][0].node.localFiles[0].childImageSharp} />
        ))}
      </Layout>
    );
  }
}

export default Store;

export const query = graphql`
query {
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
  skus: allStripeSku(sort: {fields: [price]}) {
    edges {
      node {
        id
        currency
        attributes {
          name
        }
        image
        product {
          id
        }
        price
        updated
        localFiles {
          absolutePath
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
}
`