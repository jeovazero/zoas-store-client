// @flow
import React from 'react'
import ProductListDataType from './__generated__/ProductList_data.graphql'
import { withRouter } from 'react-router-dom'
import { CardProduct } from '../../components'
import { graphql, createFragmentContainer } from 'react-relay'
import { makeStyles, createStyles } from '@material-ui/styles'

type Props = {
  data: ProductListDataType,
  history: {
    push: mixed => mixed
  }
}

const useStyles = makeStyles(theme => {
  return createStyles({
    section: {
      padding: '0rem',
      display: 'flex',
      justifyContent: 'center'
    },
    ul: {
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap'
    },
    item: {
      marginBottom: theme.spacing(1)
    }
  })
})

const ProductList = (props: Props) => {
  const { data, history } = props
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <ul className={classes.ul}>
        {data.edges.map(({ node }) => (
          <CardProduct
            className={classes.item}
            key={node.id}
            title={node.title}
            price={node.price}
            image={node.photos[0].url}
            isInStock={node.avaliability}
            onClick={() => {
              history.push({
                pathname: '/product',
                search: `?id=${node.id}`
              })
            }}
          />
        ))}
      </ul>
    </section>
  )
}

export default createFragmentContainer(withRouter(ProductList), {
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
