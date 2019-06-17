// @flow
import React from 'react'
import { styled } from '@material-ui/styles'
import { CircularProgress, Typography } from '@material-ui/core'
import zoasLogo from '../../../assets/zoas-logo.svg'
import jeovazeroLogo from '../../../assets/jeovazero-logo.png'

// CenterWrapper
export const CenterWrapperBase = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 'auto',
  boxSizing: 'border-box'
})

export const CenterWrapper = styled(CenterWrapperBase)(({ theme }) => ({
  [theme.breakpoints.up('xxs')]: {
    width: theme.breakpoints.values['xxs']
  },
  [theme.breakpoints.up('xs')]: {
    width: theme.breakpoints.values['xs']
  },
  [theme.breakpoints.up('sm')]: {
    width: theme.breakpoints.values['sm']
  },
  [theme.breakpoints.up('md')]: {
    width: theme.breakpoints.values['md']
  }
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
export const Title = styled(props => <Typography variant='h4' {...props} />)(
  ({ theme }) => ({
    padding: '2rem 0rem',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.75rem'
    }
  })
)

// Footer
export const Footer = styled(props => (
  <footer {...props}>
    <CenterWrapperBase>
      <img src={zoasLogo} width='200' />
      <Typography> A Loja só de zoas </Typography>
      <div>
        <Typography color='inherit' variant='subtitle2'>
          criado por{' '}
        </Typography>
        <img src={jeovazeroLogo} width='144' />
      </div>
    </CenterWrapperBase>
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

export const Width480 = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: theme.breakpoints.values['xs'],
  [theme.breakpoints.up('xxs')]: {
    padding: '0 0.75rem'
  },
  [theme.breakpoints.up('sm')]: {
    padding: 0
  }
}))

export const Subtitle = styled(({ children, ...spread }) => (
  <div {...spread}>
    <Typography color='inherit' variant='h5'>
      {children}
    </Typography>
  </div>
))(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.light,
  '& h5': {
    maxWidth: '480px',
    margin: 'auto',
    color: theme.palette.primary.contrastText
  },
  [theme.breakpoints.up('xxs')]: {
    padding: '1rem 0.75rem'
  },
  [theme.breakpoints.up('sm')]: {
    padding: '1rem 0'
  }
}))
