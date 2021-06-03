import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import stripeLogo from '../images/powered_by_stripe.svg'

const Layout = ({ children }) => {
  return (

    <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0,
    }}
  >
    {children}
    <footer>
      <div>
        © 2020, Built by <a href="https://twitter.com/thorwebdev">Thor</a>{' '}
        with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      <div>
        <a href="https://stripe.com">
          <img src={stripeLogo} alt="Payments powered by Stripe" />
        </a>
      </div>
    </footer>
  </div>
  )
}

export default Layout