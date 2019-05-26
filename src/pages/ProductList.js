// @flow
import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { CardProduct } from '../components'
import { makeStyles, createStyles } from '@material-ui/styles'
import ProductListDataType from './__generated__/ProductList_data.graphql'

type Props = {
  data: ProductListDataType
}

const useStyles = makeStyles(theme => {
  console.log({ theme })
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

const ProductList = (props: Props) => {
  const { data } = props
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <ul className={classes.ul}>
        {data.edges.map(({ node }) => (
          <CardProduct
            className={classes.item}
            key={node.id}
            title={node.title}
            subtitle={node.description}
            price={`R$ ${node.price}`}
            image={node.photos[0].url}
            isInStock={node.avaliability}
          />
        ))}
      </ul>
    </section>
  )
}

export default createFragmentContainer(ProductList, {
  data: graphql`
    fragment ProductList_data on ProductConnection {
      edges {
        node {
          id
          title
          description
          price
          photos {
            url
          }
          avaliability
        }
      }
    }
  `
})
