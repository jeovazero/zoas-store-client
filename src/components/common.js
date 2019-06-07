// @flow
import React from 'react'
import { styled } from '@material-ui/styles'
import {
  IconButton,
  CircularProgress,
  Typography,
  Snackbar,
  SnackbarContent
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
