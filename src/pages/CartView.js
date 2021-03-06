// @flow
import React from 'react'
import relayEnv from '../relay/createRelay'
import AppBarRender from '../relay/common/AppBarRender'
import { ProductCartList } from '../relay/containers'
import { Typography, Button } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { graphql, QueryRenderer } from 'react-relay'
import { Link } from 'react-router-dom'
import {
  Loader,
  CenterWrapper,
  Footer,
  Title,
  SnackbarWarning,
  SadFeedback
} from '../components/common'

const CenterWrapper2 = styled(CenterWrapper)(({ theme }) => ({
  maxWidth: theme.breakpoints.values['sm'],
  [theme.breakpoints.up('xxs')]: {
    padding: '0 0.75rem',
    width: '100%'
  },
  [theme.breakpoints.up('xs')]: {
    padding: '0 1rem',
    width: 'auto'
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0 2rem'
  }
}))

const TotalPriceContainer = styled('div')(({ theme }) => ({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 1,
  marginBottom: '3rem',
  [theme.breakpoints.down('xs')]: {
    '& h4': {
      fontSize: '1.75rem'
    }
  }
}))

const ButtonFull = styled(Button)({
  width: '100%'
})

const Separator = styled('div')(({ theme }) => ({
  width: '100%',
  height: '1px',
  borderRadius: '4px',
  backgroundColor: theme.palette.grey['400'],
  margin: '1rem 0 2rem'
}))

const Details = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingBottom: '4rem'
})

const getTotalOfCart = cart =>
  cart
    .reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    .toFixed(2)
    .replace('.', ',')

const CartTotalDetails = ({ cart }) => (
  <>
    <Separator />
    <Details>
      <TotalPriceContainer>
        <Typography variant='h4'>Total</Typography>
        <Typography variant='h4'>{`R$ ${getTotalOfCart(cart)}`}</Typography>
      </TotalPriceContainer>
      <Link to='/checkout'>
        <ButtonFull size='large' variant='contained' color='primary'>
          Checkout
        </ButtonFull>
      </Link>
    </Details>
  </>
)

const CartView = () => {
  const [snackWarning, setSnackWarning] = React.useState('INITIAL') // SHOW, HIDDEN
  const errorHandler = errors => {
    if (errors && errors[0].code === 'INVALID_PRODUCT_QUANTITY') {
      setSnackWarning('SHOW')
    }
  }

  return (
    <AppBarRender>
      {({ refetchCart, cart }) => (
        <>
          <CenterWrapper2>
            <Title>Carrinho</Title>
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
                  return <Loader />
                }
                return (
                  <ProductCartList
                    data={props.cart || []}
                    onChange={refetchCart}
                    onError={errorHandler}
                  />
                )
              }}
            />
            {cart.length > 0 ? (
              <CartTotalDetails cart={cart} />
            ) : (
              <SadFeedback>
                <Typography variant='h4'>Seu carrinho está vazio!</Typography>
              </SadFeedback>
            )}
          </CenterWrapper2>
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

export default CartView
