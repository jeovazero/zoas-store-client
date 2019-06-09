// @flow
import React from 'react'
import CheckoutAddress from './CheckoutAddress'
import CheckoutPaymentInfo from './CheckoutPaymentInfo'
import CheckoutResume from './CheckoutResume'
import { AppBarRender, PayCartRender } from '../../relay/common'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { CenterWrapper, Title } from '../../components/common'
import { withRouter } from 'react-router-dom'

const CenterWrapperFull = styled(CenterWrapper)({
  maxWidth: 'none',
  paddingBottom: '4rem'
})

const DarkHeader = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.dark,
  '& h4': {
    color: theme.palette.primary.contrastText
  },
  '& > div': {
    maxWidth: '480px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '100%'
  }
}))

const StepperStyled = styled(Stepper)(({ theme }) => ({
  padding: '6px',
  borderRadius: '8px',
  backgroundColor: theme.palette.grey['100']
}))

const CheckoutView = ({ history }) => {
  const [address, setAddress] = React.useState({
    name: {
      label: 'Nome',
      value: 'John Armsless'
    },
    country: {
      label: 'País',
      value: 'Brasil'
    },
    city: {
      label: 'Cidade',
      value: 'Independencia'
    },
    zipcode: {
      label: 'CEP',
      value: '64049550'
    },
    street: {
      label: 'Rua',
      value: 'Alvaro Cabral'
    },
    district: {
      label: 'Bairro',
      value: 'Monte Pascal'
    },
    number: {
      label: 'Numero',
      value: '1023'
    }
  })
  const [creditCard, setCreditCard] = React.useState({
    cardNumber: {
      label: 'Número do cartão',
      value: '5345535234345344'
    },
    expirationDate: {
      label: 'Data de expiração',
      value: '01/27'
    },
    cvv: {
      label: 'CVV',
      value: '123'
    }
  })
  const [step, setStep] = React.useState(0)
  const arraySteps = new Array(3).fill(0)

  return (
    <AppBarRender>
      {({ refetchCart, cart }) => (
        <CenterWrapperFull>
          <DarkHeader>
            <div>
              <Title> Checkout </Title>
              <StepperStyled activeStep={step}>
                {arraySteps.map((_, i) => (
                  <Step key={i}>
                    <StepLabel />
                  </Step>
                ))}
              </StepperStyled>
            </div>
          </DarkHeader>
          {step === 0 ? (
            <CheckoutAddress
              setter={setAddress}
              data={address}
              goNext={() => setStep(1)}
              goPrevious={() => {
                history.push({
                  pathname: '/mycart'
                })
              }}
            />
          ) : step === 1 ? (
            <CheckoutPaymentInfo
              setter={setCreditCard}
              data={creditCard}
              goNext={() => setStep(2)}
              goPrevious={() => setStep(0)}
            />
          ) : step === 2 ? (
            <CheckoutResume
              state={{ creditCard, cart, address }}
              goNext={() => setStep(3)}
              goPrevious={() => setStep(1)}
            />
          ) : (
            <PayCartRender
              payload={{ address, creditCard }}
              refetchCart={refetchCart}
            />
          )}
        </CenterWrapperFull>
      )}
    </AppBarRender>
  )
}

export default withRouter(CheckoutView)
