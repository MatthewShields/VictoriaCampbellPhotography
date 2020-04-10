import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SkuCard from './SkuCard'
import { loadStripe } from '@stripe/stripe-js'

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const useSiteMetadata = () => {
  const product_data = useStaticQuery(
    graphql`

    query SkusForProduct {
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
                fluid(maxWidth: 300) {
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
      allStripeProduct {
        nodes {
          id
          name
        }
      }
    }
    
    
    
    `
  )
  return product_data
}

const Skus = () => {
  const data = useSiteMetadata()
  console.log(data);

  const product_ids = [];
  const products = {};

  data.skus.edges.map(function(sku) {
    if(products.hasOwnProperty(sku.node.product.id)) {
      products[sku.node.product.id].push(sku);
    } else {
      products[sku.node.product.id] = [];
      products[sku.node.product.id].push(sku);
      product_ids.push(sku.node.product.id);
    }
  })

  console.log(products);

  return (
    <div style={containerStyles}>
      {data.allStripeProduct.nodes.map((product) => (
        <div>
          <SkuCard key={product.id} id={product.id} name={product.name} sku={products[product.id][0].node} stripePromise={stripePromise} />
          <p onClick={() => console.log(products[product.id][0].node)}>click</p>
        </div>
      ))}
    </div>
  )
}


export default Skus
