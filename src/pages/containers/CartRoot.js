// @flow
import type { Node } from 'react'
import React from 'react'
import CartRootDataType from './__generated__/CartRoot_data.graphql'
import { withRouter } from 'react-router-dom'
import { graphql, createRefetchContainer } from 'react-relay'
import { AppBarZoas } from '../../components'

type Props = {
  data: CartRootDataType,
  relay: {
    refetch: () => mixed
  },
  children: mixed => Node,
  history: {
    push: mixed => mixed
  }
}

const CartRoot = (props: Props) => {
  const { data = [], children, relay, history } = props
  const quantity = data.reduce((acc, cur) => acc + cur.quantity, 0)
  const price = data.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

  return (
    <>
      <AppBarZoas
        totalProducts={quantity}
        totalPrice={price}
        onClick={() => {
          history.push({
            pathname: '/mycart'
          })
        }}
      />
      {children && children({ refetchCart: relay.refetch, cart: data })}
    </>
  )
}

export default createRefetchContainer(
  withRouter(CartRoot),
  {
    data: graphql`
      fragment CartRoot_data on ProductCart @relay(plural: true) {
        id
        price
        quantity
      }
    `
  },
  graphql`
    query CartRootRefectQuery {
      cart {
        ...CartRoot_data
      }
    }
  `
)
