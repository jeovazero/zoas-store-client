// @flow
import React from 'react'
import { styled } from '@material-ui/styles'
import { Subtitle, Width480, SpaceBetween } from '../../components/common'
import type {
  CreditCardType,
  AddressType,
  ProductType
} from '../../components/common'
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableFooter,
  Typography,
  Button
} from '@material-ui/core'

type Props = {
  state: {
    creditCard: CreditCardType,
    address: AddressType,
    cart: ProductType[]
  },
  goNext: () => mixed,
  goPrevious: () => mixed
}

const TableContainer = styled('div')({
  padding: '0.5rem 0 2rem',
  '& > p': {
    padding: '0.5rem 0'
  }
})

const formatMoney = price => `R$ ${price.toFixed(2).replace('.', ',')}`

const CheckoutResume = ({
  state: { creditCard, address, cart },
  goNext,
  goPrevious
}: Props) => {
  const totalPrice = formatMoney(
    cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
  )
  return (
    <>
      <Subtitle>Resumo</Subtitle>
      <Width480>
        <TableContainer>
          <Typography variant='body1'> Items </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Titulo</TableCell>
                <TableCell>Unidades</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(el => (
                <TableRow key={el.id}>
                  <TableCell>{el.title}</TableCell>
                  <TableCell>{el.quantity}</TableCell>
                  <TableCell>{formatMoney(el.price)}</TableCell>
                  <TableCell>{formatMoney(el.price * el.quantity)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell> -------- </TableCell>
                <TableCell> -------- </TableCell>
                <TableCell> {totalPrice} </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <TableContainer>
          <Typography variant='body1'> Informações de entrega </Typography>
          <Table>
            <TableBody>
              {Object.keys(address).map(key => (
                <TableRow key={key}>
                  <TableCell>{address[key].label}</TableCell>
                  <TableCell>{address[key].value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer>
          <Typography variant='body1'> Informações de Pagamento </Typography>
          <Table>
            <TableBody>
              {Object.keys(creditCard).map(key => (
                <TableRow key={key}>
                  <TableCell>{creditCard[key].label}</TableCell>
                  <TableCell>{creditCard[key].value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <SpaceBetween>
          <Button variant='contained' onClick={goPrevious}>
            Voltar
          </Button>
          <Button variant='contained' color='secondary' onClick={goNext}>
            Finalizar
          </Button>
        </SpaceBetween>
      </Width480>
    </>
  )
}

export default CheckoutResume
