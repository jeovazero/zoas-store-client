// @flow
import React, { useState, useEffect } from 'react'
import type {
  FormType,
  CreditCardType,
  AddressType
} from '../../components/common'
import { Loader } from '../../components/common'
import { payCartMutation } from '../mutations'
import { Typography } from '@material-ui/core'

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
  const [data, setData] = useState({ customer: '' })
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
    <Typography variant='h4'>
      Compra em nome de {data.customer} feita com sucesso!
    </Typography>
  )
}

export default PayCartRender
