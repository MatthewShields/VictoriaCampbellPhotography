import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Header from '../components/header'
import FlexibleContent from '../components/FlexibleContent'

import Checkout from '../components/checkout'

const Post = ({ data }) => {
  console.log('data');
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header siteTitle={'Victoria Campbell'} />
      <FlexibleContent sections={data.prismic.page.body} />
    </Layout>
  )
}

export default Post


/* eslint no-undef: "off" */
export const pageQuery = graphql`
query PageContent($uid: String!) {
  prismic {
    page(uid: $uid, lang: "en-us") {
      body {
        ... on PRISMIC_PageBodyText_block {
          primary {
            text_block_content
            text_block_title
          }
          type
        }
        ... on PRISMIC_PageBodyImage_grid {
          primary {
            columns
          }
          fields {
            title
            imageSharp {
              absolutePath
            }
          }
          type
        }
      }
    }
  }
}


`;
