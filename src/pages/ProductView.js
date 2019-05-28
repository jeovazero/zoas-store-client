import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import qs from 'querystring'
import relay from '../createRelay'
import CartRootRender from './CartRootRender'
import { Product } from './containers'
import { putProductMutation } from './mutations'
import { makeStyles } from '@material-ui/styles'
import { Redirect } from 'react-router-dom'
import { graphql, QueryRenderer } from 'react-relay'

type Props = {
  history: {
    location: {
      search: string
    }
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const getProductCartId = productId =>
  Buffer.from(
    Buffer.from(productId, 'base64')
      .toString('ascii')
      .replace(/Product/, 'ProductCart')
  ).toString('base64')

const ProductView = (props: Props) => {
  const { history } = props
  const query = history.location.search.slice(1)
  const obj = qs.parse(query)

  if (!obj || obj['id'].length === 0) {
    return <Redirect to='/' />
  }

  const classes = useStyles()
  const productId = obj['id']
  const productCartId = getProductCartId(productId)

  return (
    <div>
      <CartRootRender>
        {({ refetchCart, cart }) => (
          <div className={classes.root}>
            <QueryRenderer
              environment={relay}
              query={graphql`
                query ProductViewQuery($id: ID!) {
                  product(id: $id) {
                    ...Product_data
                  }
                }
              `}
              variables={{ id: productId }}
              render={({ error, props }) => {
                if (error) {
                  return <p>{error.message}</p>
                }
                if (!props) {
                  return (
                    <div style={{ padding: '2rem' }}>
                      <CircularProgress />
                    </div>
                  )
                }
                const found = cart.find(x => x.id === productCartId) || {
                  quantity: 0
                }
                return (
                  <Product
                    data={props.product}
                    onBuy={({ quantity, productId }) => {
                      putProductMutation(
                        {
                          productId,
                          quantity: 1 + found.quantity
                        },
                        () => {
                          refetchCart()
                          console.log('finish put product')
                        }
                      )
                    }}
                  />
                )
              }}
            />
          </div>
        )}
      </CartRootRender>
    </div>
  )
}

export default ProductView
