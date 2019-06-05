// @flow
import React from 'react'
import relayEnv from '../relay/createRelay'
import { ProductCartList } from '../relay/containers'
import AppBarRender from '../relay/common/AppBarRender'
import { CircularProgress, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { graphql, QueryRenderer } from 'react-relay'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  loader: {
    padding: '2rem'
  },
  total: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    marginBottom: '2rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '412px',
    width: '100%'
  }
})

const CartView = () => {
  const classes = useStyles()
  const total = c => c.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
  return (
    <div>
      <AppBarRender>
        {({ refetchCart, cart }) => (
          <div className={classes.root}>
            <QueryRenderer
              environment={relayEnv}
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
            <div className={classes.details}>
              <div className={classes.total}>
                <Typography variant='h3'>Total</Typography>
                <Typography variant='h3'>{`R$ ${total(cart)}`}</Typography>
              </div>
              <Link to='/checkout'>
                <Button size='large' variant='contained' color='primary'>
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </AppBarRender>
    </div>
  )
}

export default CartView
