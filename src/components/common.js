// @flow
import React from 'react'
import { styled } from '@material-ui/styles'
import {
  IconButton,
  CircularProgress,
  Typography,
  Snackbar,
  SnackbarContent,
  TextField
} from '@material-ui/core'
import { Error as ErrorIcon, Close as CloseIcon } from '@material-ui/icons'
import zoasLogo from '../../assets/zoas-logo.svg'
import jeovazeroLogo from '../../assets/jeovazero-logo.png'

// CenterWrapper
export const CenterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: theme.breakpoints.values['md']
}))

// Loader
export const Loader = styled(() => (
  <div>
    <CircularProgress />
  </div>
))({
  padding: '2rem'
})

// Title
export const Title = styled(props => <Typography variant='h4' {...props} />)({
  padding: '2rem 0rem',
  width: '100%'
})

// Snackbar
const SnackbarContentError = styled(SnackbarContent)(({ theme, kind }) => ({
  backgroundColor: kind === 'error' ? theme.palette.error.dark : '#f8ffce',
  color: kind === 'error' ? 'white' : 'black',
  flexWrap: 'nowrap'
}))

const SnackMessage = styled('span')({
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    marginRight: '4px'
  }
})

type SnackbarProps = {
  onClose: () => mixed,
  message?: string
}

const SnackbarCustom = (Icon, kind) => (props: SnackbarProps) => {
  const {
    onClose,
    message = 'Um erro inesperado ocorreu! Tente novamente mais tarde',
    ...spread
  } = props
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      {...spread}
    >
      <SnackbarContentError
        kind={kind}
        message={
          <SnackMessage>
            <Icon />
            {message}
          </SnackMessage>
        }
        action={[
          <IconButton key='close' color='inherit' onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  )
}

export const SnackbarError = SnackbarCustom(ErrorIcon, 'error')
export const SnackbarWarning = SnackbarCustom(ErrorIcon, 'warning')

// Footer
export const Footer = styled(props => (
  <footer {...props}>
    <CenterWrapper>
      <img src={zoasLogo} width='200' />
      <Typography> A Loja só de zoas </Typography>
      <div>
        <Typography color='inherit' variant='subtitle2'>
          criado por{' '}
        </Typography>
        <img src={jeovazeroLogo} width='144' />
      </div>
    </CenterWrapper>
  </footer>
))(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(4),
  color: theme.palette.primary.contrastText,
  '& div div': {
    paddingTop: theme.spacing(3)
  }
}))

export const SpaceBetween = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
})

export const Width480 = styled('div')({
  width: '100%',
  maxWidth: '480px'
})

export const Subtitle = styled(({ children, ...spread }) => (
  <div {...spread}>
    <Typography color='inherit' variant='h5'>
      {children}
    </Typography>
  </div>
))(({ theme }) => ({
  width: '100%',
  padding: '1rem 0',
  backgroundColor: theme.palette.primary.light,
  '& h5': {
    maxWidth: '480px',
    margin: 'auto',
    color: theme.palette.primary.contrastText
  }
}))

const FormStyled = styled(Width480)({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0'
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

type FormProps = {|
  setForm: any => mixed,
  form: FormType
|}

export type ProductType = {|
  id: string,
  quantity: number,
  price: number,
  title: string
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
