// @flow
import React from 'react'
import AppBarDataType from './__generated__/AppBar_data.graphql'
import { graphql, createRefetchContainer } from 'react-relay'
import { AppBarZoas } from '../../components'

type Props = {
  data: AppBarDataType
}

const AppBar = (props: Props) => {
  const { data = [] } = props
  const quantity = data.length
  const price = data.reduce((acc, cur) => acc + cur.price, 0)

  return <AppBarZoas totalProducts={quantity} totalPrice={price} />
}

export default createRefetchContainer(
  AppBar,
  {
    data: graphql`
      fragment AppBar_data on ProductCart @relay(plural: true) {
        id
        price
      }
    `
  },
  graphql`
    query AppBarRefetchQuery {
      cart {
        ...AppBar_data
      }
    }
  `
)
