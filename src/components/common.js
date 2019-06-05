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

// CenterWrapper
export const CenterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: theme.breakpoints.values['md']
}))

// Loader
export const Loader = styled(CircularProgress)({
  padding: '2rem'
})

// Title
export const Title = styled(props => <Typography variant='h4' {...props} />)({
  padding: '2rem 1rem',
  width: '100%'
})

// Snackbar
const SnackbarContentError = styled(SnackbarContent)(({ theme }) => ({
  backgroundColor: theme.palette.error.dark,
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

export const SnackbarError = (props: SnackbarProps) => {
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
        message={
          <SnackMessage>
            <ErrorIcon />
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
