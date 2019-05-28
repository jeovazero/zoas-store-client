// @flow
import React from 'react'
import ProductCartListDataType from './__generated__/ProductCartList_data.graphql'
import { ProductCart } from '../../components'
import { graphql, createFragmentContainer } from 'react-relay'
import { makeStyles, createStyles } from '@material-ui/styles'

type Props = {
  data: ProductCartListDataType
}

const useStyles = makeStyles(theme => {
  return createStyles({
    section: {
      padding: '2rem',
      maxWidth: '640px',
      display: 'flex',
      justifyContent: 'center'
    },
    ul: {
      margin: 0,
      padding: 0
    },
    item: {
      marginBottom: theme.spacing(1)
    }
  })
})

const ProductCartList = (props: Props) => {
  const { data } = props
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
          />
        ))}
      </ul>
    </section>
  )
}

export default createFragmentContainer(ProductCartList, {
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
})