// @flow
import React from 'react'
import relay from '../createRelay'
import { ProductCartList } from './containers'
import CartRootRender from './CartRootRender'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { graphql, QueryRenderer } from 'react-relay'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  loader: {
    padding: '2rem'
  }
})

const CartView = () => {
  const classes = useStyles()

  return (
    <div>
      <CartRootRender>
        {({ refetchCart }) => (
          <div className={classes.root}>
            <QueryRenderer
              environment={relay}
              query={graphql`
                query CartViewQuery {
                  cart {
                    ...ProductCartList_data
                  }
                }
              `}
              variables={{}}
              render={({ error, props }) => {
                if (error) {
                  return <p>{error.message}</p>
                }
                if (!props) {
                  return (
                    <div className={classes.loader}>
                      <CircularProgress />
                    </div>
                  )
                }
                return (
                  <ProductCartList data={props.cart} onChange={refetchCart} />
                )
              }}
            />
          </div>
        )}
      </CartRootRender>
    </div>
  )
}

export default CartView
