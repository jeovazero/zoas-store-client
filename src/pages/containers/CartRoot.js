// @flow
import type { Node } from 'react'
import React from 'react'
import CartRootDataType from './__generated__/CartRoot_data.graphql'
import { graphql, createRefetchContainer } from 'react-relay'
import { AppBarZoas } from '../../components'

type Props = {
  data: CartRootDataType,
  relay: {
    refetch: () => mixed
  },
  children: Node
}

const CartRoot = (props: Props) => {
  const { data = [], children, relay } = props
  const quantity = data.reduce((acc, cur) => acc + cur.quantity, 0)
  const price = data.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

  return (
    <>
      <AppBarZoas totalProducts={quantity} totalPrice={price} />
      {children && children({ refetchCart: relay.refetch, cart: data })}
    </>
  )
}

export default createRefetchContainer(
  CartRoot,
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
