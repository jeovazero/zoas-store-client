import React from 'react'
import qs from 'querystring'
import relayEnv from '../relay/createRelay'
import AppBarRender from '../relay/common/AppBarRender'
import { Product } from '../relay/containers'
import { putProductMutation } from '../relay/mutations'
import { Redirect } from 'react-router-dom'
import { graphql, QueryRenderer } from 'react-relay'
import {
  Loader,
  CenterWrapper,
  Footer,
  SnackbarWarning
} from '../components/common'

type Props = {
  history: {
    location: {
      search: string
    }
  }
}

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

  const productId = obj['id']
  const productCartId = getProductCartId(productId)
  const [snackWarning, setSnackWarning] = React.useState('INITIAL')
  return (
    <AppBarRender>
      {({ refetchCart, cart }) => (
        <>
          <CenterWrapper>
            <QueryRenderer
              environment={relayEnv}
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
                  return <Loader />
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
                        },
                        err => {
                          console.log({ err })
                          if (
                            err &&
                            err[0].code === 'INVALID_PRODUCT_QUANTITY'
                          ) {
                            setSnackWarning('SHOW')
                          }
                        }
                      )
                    }}
                  />
                )
              }}
            />
          </CenterWrapper>
          <SnackbarWarning
            message='Desculpe, quantidade máxima do estoque do produto atingida!'
            open={snackWarning === 'SHOW'}
            onClose={() => {
              setSnackWarning('HIDDEN')
            }}
          />
          <Footer />
        </>
      )}
    </AppBarRender>
  )
}

export default ProductView
