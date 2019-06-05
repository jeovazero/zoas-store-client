import React from 'react'
import { styled } from '@material-ui/styles'
import { CircularProgress, Typography } from '@material-ui/core'

export const CenterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: theme.breakpoints.values['md']
}))

export const Loader = styled(CircularProgress)({
  padding: '2rem'
})

export const Title = styled(props => <Typography variant='h4' {...props} />)({
  padding: '2rem 1rem',
  width: '100%'
})
