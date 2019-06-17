// @flow
import React from 'react'
import ProductCartListDataType from './__generated__/ProductCartList_data.graphql'
import { ProductCart } from '../../components'
import { putProductMutation, removeProductMutation } from '../mutations'
import { graphql, createRefetchContainer } from 'react-relay'
import { makeStyles, createStyles } from '@material-ui/styles'

type Props = {
  data: ProductCartListDataType,
  relay: {
    refetch: () => mixed
  },
  onChange: () => mixed,
  onError: () => mixed
}

const useStyles = makeStyles(theme => {
  return createStyles({
    section: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: 0
    },
    ul: {
      width: '100%',
      margin: 0,
      padding: 0
    },
    item: {
      margin: 'auto',
      marginBottom: theme.spacing(6)
    }
  })
})

const ProductCartList = (props: Props) => {
  const { data = [], onChange, onError, relay } = props
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <ul className={classes.ul}>
        {data.map(node => (
          <ProductCart
            className={classes.item}
            key={node.id}
            title={node.title}
            subtitle={node.description}
            price={node.price}
            image={node.photos[0].url}
            quantity={node.quantity}
            maxQuantity={node.quantity + 5}
            onChangeQuantity={quantity => {
              putProductMutation(
                { productId: node.id, quantity },
                () => {
                  relay.refetch()
                  onChange()
                },
                onError
              )
            }}
            onRemove={() => {
              removeProductMutation({ productId: node.id }, () => {
                relay.refetch()
                onChange()
              })
            }}
          />
        ))}
      </ul>
    </section>
  )
}

export default createRefetchContainer(
  ProductCartList,
  {
    data: graphql`
      fragment ProductCartList_data on ProductCart @relay(plural: true) {
        id
        title
        description
        price
        photos {
          url
        }
        quantity
      }
    `
  },
  graphql`
    query ProductCartListRefetchQuery {
      cart {
        ...ProductCartList_data
      }
    }
  `
)
