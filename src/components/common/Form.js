// @flow
import React from 'react'
import { styled } from '@material-ui/styles'
import { TextField } from '@material-ui/core'
import { Width480 } from './misc'

const FormStyled = styled(Width480)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',
  paddingBottom: '1rem'
})

type FormEntry = {|
  label: string,
  value: string
|}

export type AddressType = {|
  city: FormEntry,
  country: FormEntry,
  district: FormEntry,
  name: FormEntry,
  number: FormEntry,
  street: FormEntry,
  zipcode: FormEntry
|}

export type CreditCardType = {|
  cardNumber: FormEntry,
  cvv: FormEntry,
  expirationDate: FormEntry
|}

export type FormType = $Shape<CreditCardType & AddressType>

export type ProductType = {|
  id: string,
  quantity: number,
  price: number,
  title: string
|}

type FormProps = {|
  setForm: any => mixed,
  form: FormType
|}

export const Form = ({ setForm, form }: FormProps) => {
  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: { ...form[name], value } })
  }

  return (
    <FormStyled>
      {Object.keys(form).map(key => {
        const { label, value, ...others } = form[key]
        return (
          <TextField
            name={key}
            label={label}
            key={key}
            value={value}
            required
            onChange={handleChange}
            margin='normal'
            inputProps={others}
          />
        )
      })}
    </FormStyled>
  )
}
