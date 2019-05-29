// @flow
import React, { useState, useEffect } from 'react'
import CartRootRender from './CartRootRender'
import { payCartMutation } from './mutations'
import { Typography, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  loader: {
    padding: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '412px',
    width: '100%'
  },
  spaceBetween: {
    width: '100%',
    display: 'flex',
    maxWidth: '412px',
    justifyContent: 'space-between'
  },
  spaceBetween2: {
    display: 'flex',
    width: '200px',
    justifyContent: 'space-between'
  }
})

type AddressType = {|
  city: string,
  country: string,
  district: string,
  name: string,
  number: string,
  street: string,
  zipcode: string
|}

type CreditCardType = {|
  cardNumber: string,
  cvv: string,
  expirationDate: string
|}

type FormType = CreditCardType & AddressType

type ProductType = {
  quantity: number,
  price: number
}

type ConclusionProps = {
  state: {
    creditCard: CreditCardType,
    personal: AddressType,
    cart: ProductType[]
  },
  className: string
}

const Conclusion = ({
  state: { creditCard, personal, cart },
  className
}: ConclusionProps) => {
  const classes = useStyles()
  return (
    <div className={className}>
      <Typography variant='h4'> Conclusão </Typography>
      <div>
        <Typography variant='h5'> Items </Typography>
        <div>
          {cart.map((el, key) => (
            <div className={classes.spaceBetween} key={key}>
              <div className={classes.spaceBetween2}>
                <Typography>{el.quantity}</Typography>
                <Typography>x</Typography>
                <Typography>titulo</Typography>
              </div>
              <Typography>{`R$ ${el.quantity * el.price}`}</Typography>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Typography variant='h5'> Informações de Entrega </Typography>
        <div>
          <Typography>Nome completo: {personal.name}</Typography>
          <Typography>Bairro: {personal.district}</Typography>
          <Typography>Rua: {personal.street}</Typography>
          <Typography>Numero: {personal.number}</Typography>
          <Typography>CEP: {personal.number}</Typography>
        </div>
      </div>
    </div>
  )
}

type FormProps = {|
  setForm: FormType => mixed,
  className: string,
  form: $Shape<FormType>
|}

const Form = ({ setForm, form, className }: FormProps) => {
  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className={className}>
      {Object.keys(form).map(key => {
        return (
          <TextField
            name={key}
            label={key}
            key={key}
            value={form[key]}
            onChange={handleChange}
            margin='normal'
          />
        )
      })}
    </div>
  )
}

type PayloadType = {
  personal: AddressType,
  creditCard: CreditCardType
}

type PayCartProps = {
  payload: PayloadType,
  refetchCart: () => void
}

const PayCartRender = ({
  payload: { personal, creditCard },
  refetchCart
}: PayCartProps) => {
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState()
  const [data, setData] = useState({ customer: '' })
  useEffect(() => {
    const { name, ...address } = personal
    payCartMutation(
      {
        address,
        fullName: personal.name,
        creditCard
      },
      ({ response, error }) => {
        console.log(error, response)
        if (error) setErr(error)
        if (response) setData(response.payCart || {})
        setLoading(false)
        refetchCart()
      }
    )
  }, [])
  if (err) return <p> err.message </p>
  if (loading) return <p> Loading </p>
  return (
    <Typography variant='h4'>
      Compra em nome de {data.customer} feita com sucesso!
    </Typography>
  )
}

const CheckoutView = () => {
  const classes = useStyles()
  const [personal, setPersonal] = React.useState({
    name: 'john',
    country: 'brasil',
    city: 'caxias',
    zipcode: '444444',
    street: 'rua 4',
    district: 'bairro 4',
    number: '44'
  })
  const [step, setStep] = React.useState(0)
  const [creditCard, setCreditCard] = React.useState({
    cardNumber: '5345535234345344',
    expirationDate: '01/27',
    cvv: '123'
  })

  return (
    <div>
      <CartRootRender>
        {({ refetchCart, cart }) => (
          <div className={classes.root}>
            <Typography variant='h4'>Checkout</Typography>
            {step === 0 ? (
              <Form
                setForm={(setPersonal: AddressType => mixed)}
                form={(personal: AddressType)}
                className={classes.form}
              />
            ) : step === 1 ? (
              <Form
                setForm={(setCreditCard: CreditCardType => mixed)}
                form={(creditCard: CreditCardType)}
                className={classes.form}
              />
            ) : step === 2 ? (
              <Conclusion
                state={{ creditCard, cart, personal }}
                className={classes.form}
              />
            ) : (
              <PayCartRender
                payload={{ personal, creditCard }}
                refetchCart={refetchCart}
              />
            )}
            <div className={classes.spaceBetween}>
              {step === 1 && (
                <Button variant='contained' onClick={() => setStep(step - 1)}>
                  Voltar
                </Button>
              )}
              {step < 2 && (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => setStep(step + 1)}
                >
                  Continuar
                </Button>
              )}
              {step === 2 && (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => setStep(3)}
                >
                  Finalizar
                </Button>
              )}
            </div>
          </div>
        )}
      </CartRootRender>
    </div>
  )
}

export default CheckoutView
