import React from 'react'
import relay from '../createRelay'
import { AppBar } from '../containers'
import { createCartMutation } from '../mutations'
import { graphql, QueryRenderer } from 'react-relay'

const AppBarRender = ({ children }) => (
  <QueryRenderer
    environment={relay}
    variables={{}}
    query={graphql`
      query AppBarRenderQuery {
        cart {
          ...AppBar_data
        }
      }
    `}
    render={({ error, props, retry }) => {
      if (error) {
        return <p>error.message</p>
      }
      if (!props) return <p>Loading</p>
      if (!props.cart) {
        // No cart, then create one and retry
        createCartMutation({ onComplete: retry })
      }
      const cart = props.cart || []
      return <AppBar data={cart}>{children}</AppBar>
    }}
  />
)

export default AppBarRender
