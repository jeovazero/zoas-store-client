import React from 'react'
import relay from '../createRelay'
import { CartRoot } from './containers'
import { createCartMutation } from './mutations'
import { graphql, QueryRenderer } from 'react-relay'

const CartRootRender = ({ children }) => (
  <QueryRenderer
    environment={relay}
    variables={{}}
    query={graphql`
      query CartRootRenderQuery {
        cart {
          ...CartRoot_data
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
      return <CartRoot data={cart}>{children}</CartRoot>
    }}
  />
)

export default CartRootRender
