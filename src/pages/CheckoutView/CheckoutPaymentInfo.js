// @flow
import React from 'react'
import { Button } from '@material-ui/core'
import { Subtitle, Form, Width480, SpaceBetween } from '../../components/common'
import type { CreditCardType } from '../../components/common'

type Props = {
  setter: CreditCardType => mixed,
  data: CreditCardType,
  goNext: () => mixed,
  goPrevious: () => mixed
}

const CheckoutPaymentInfo = ({ setter, data, goNext, goPrevious }: Props) => (
  <>
    <Subtitle>Informações do Cartão de Crédito</Subtitle>
    <Form setForm={setter} form={data} />
    <Width480>
      <SpaceBetween>
        <Button variant='contained' onClick={goPrevious}>
          Voltar
        </Button>
        <Button variant='contained' color='primary' onClick={goNext}>
          Continuar
        </Button>
      </SpaceBetween>
    </Width480>
  </>
)

export default CheckoutPaymentInfo
