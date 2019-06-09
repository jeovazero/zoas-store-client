// @flow
import React, { useState, useEffect } from 'react'
import type {
  FormType,
  CreditCardType,
  AddressType
} from '../../components/common'
import { payCartMutation } from '../mutations'
import { Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Loader, Width480 } from '../../components/common'
import celebrationIcon from '../../../assets/celebration.svg'

const SuccessPayment = styled(props => (
  <div {...props}>
    <img src={celebrationIcon} />
    <Typography variant='h4'> {props.children} </Typography>
  </div>
))({
  margin: 'auto',
  padding: '2rem 0',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
  '& img': {
    width: '100%',
    maxWidth: '300px',
    '@media screen and (max-width: 600px)': {
      maxWidth: '200px'
    }
  },
  '& h4': {
    padding: '1rem 0'
  },
  '& strong': {
    fontWeight: 'bolder'
  }
})

type PayloadType = {
  address: AddressType,
  creditCard: CreditCardType
}

type PayCartProps = {
  payload: PayloadType,
  refetchCart: () => void
}

const PayCartRender = ({
  payload: { address, creditCard },
  refetchCart
}: PayCartProps) => {
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState()
  const [data, setData] = useState({ customer: '', totalPaid: 0 })
  const remap = (obj: FormType) => {
    return Object.keys(obj).reduce((acc, cur) => {
      acc[cur] = obj[cur].value
      return acc
    }, {})
  }
  useEffect(() => {
    const { name, ...addressSpread } = address
    payCartMutation(
      {
        address: remap(addressSpread),
        fullName: address.name.value,
        creditCard: remap(creditCard)
      },
      ({ response, error }) => {
        console.log(error, response)
        if (error) setErr(error)
        if (response) setData(response.payCart.payload || {})
        setLoading(false)
        refetchCart()
      }
    )
  }, [])
  if (err) return <p> err.message </p>
  if (loading) return <Loader />
  return (
    <Width480>
      <SuccessPayment>
        Compra de{' '}
        <strong>R$ {data.totalPaid.toFixed(2).replace('.', ',')}</strong> em
        nome de <strong>{data.customer}</strong> feita com sucesso!
      </SuccessPayment>
    </Width480>
  )
}

export default PayCartRender
