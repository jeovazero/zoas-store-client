// @flow
import React from 'react'
import { styled } from '@material-ui/styles'
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
import { Error as ErrorIcon, Close as CloseIcon } from '@material-ui/icons'

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
