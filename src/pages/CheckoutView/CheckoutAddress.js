// @flow
import React from 'react'
import { Subtitle, Form, Width480, SpaceBetween } from '../../components/common'
import type { AddressType } from '../../components/common'
import { Button } from '@material-ui/core'

type Props = {
  setter: AddressType => mixed,
  data: AddressType,
  goNext: () => mixed,
  goPrevious: () => mixed
}

const CheckoutAddress = ({ setter, data, goNext, goPrevious }: Props) => {
  return (
    <>
      <Subtitle>Informações Pessoais</Subtitle>
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
}

export default CheckoutAddress
