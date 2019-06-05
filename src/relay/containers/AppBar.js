// @flow
import type { Node } from 'react'
import React from 'react'
import AppBarDataType from './__generated__/AppBar_data.graphql'
import { withRouter } from 'react-router-dom'
import { graphql, createRefetchContainer } from 'react-relay'
import { AppBarZoas } from '../../components'

type Props = {
  data: AppBarDataType,
  relay: {
    refetch: () => mixed
  },
  children: mixed => Node,
  history: {
    push: mixed => mixed
  }
}

const AppBar = (props: Props) => {
  const { data = [], children, relay, history } = props
  const quantity = data.reduce((acc, cur) => acc + cur.quantity, 0)
  const price = data.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

  return (
    <>
      <AppBarZoas
        totalProducts={quantity}
        totalPrice={price}
        onClickLogo={() => {
          history.push({
            pathname: '/'
          })
        }}
        onClickCart={() => {
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
  withRouter(AppBar),
  {
    data: graphql`
      fragment AppBar_data on ProductCart @relay(plural: true) {
        id
        price
        quantity
      }
    `
  },
  graphql`
    query AppBarRefectQuery {
      cart {
        ...AppBar_data
      }
    }
  `
)
