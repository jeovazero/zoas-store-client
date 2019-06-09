// @flow
import React, { useState, useEffect } from 'react'
import type {
  FormType,
  CreditCardType,
  AddressType
} from '../../components/common'
import { payCartMutation } from '../mutations'
import { Button, Typography } from '@material-ui/core'
import {
  Loader,
  Width480,
  SuccessFeedback,
  SadFeedback
} from '../../components/common'

type PayloadType = {
  address: AddressType,
  creditCard: CreditCardType
}

type PayCartProps = {
  payload: PayloadType,
  refetchCart: () => void,
  goBack: (code: string) => mixed
}

const PayCartRender = ({
  payload: { address, creditCard },
  refetchCart,
  goBack
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
        if (response.payCart) setData(response.payCart.payload || {})
        setLoading(false)
        refetchCart()
      }
    )
  }, [])
  if (err) {
    switch (err[0].code) {
      case 'INVALID_CREDIT_CARD':
        return (
          <SadFeedback>
            <Typography variant='h5'>
              Infelimente, o número de cartão fornecido é inválido, retorne para
              o checkout. <br />
            </Typography>
            <Button variant='outlined' onClick={() => goBack(err[0].code)}>
              Retornar
            </Button>
          </SadFeedback>
        )
      case 'LACK_OF_STOCK':
        return (
          <SadFeedback>
            <Typography variant='h6'>
              Neste exato momento, ficamos com falta de estoque do produto
              <strong>
                {err[0].message.replace(/(.*("(.+)").*)/g, ' $3 ')}
              </strong>
              para a quantidade do pedido. Lamentamos o ocorrido e te convidamos
              a comprar outro produto! <br />
            </Typography>
            <Button variant='outlined' onClick={() => goBack(err[0].code)}>
              Voltar para loja
            </Button>
          </SadFeedback>
        )
      default:
        return (
          <SadFeedback>
            <Typography variant='h5'>
              Um erro inesperado ocorreu! Tente novamente mais tarde.
            </Typography>
          </SadFeedback>
        )
    }
  }
  if (loading) return <Loader />
  return (
    <Width480>
      <SuccessFeedback>
        <Typography variant='h5'>
          Compra de
          <strong> R$ {data.totalPaid.toFixed(2).replace('.', ',')}</strong> em
          nome de <strong>{data.customer}</strong> feita com sucesso!
        </Typography>
      </SuccessFeedback>
    </Width480>
  )
}

export default PayCartRender
