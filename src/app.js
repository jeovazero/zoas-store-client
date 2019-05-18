import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Button from '@material-ui/core/Button'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <h3>Hello friend!</h3>
      <p>Zoas Store - only for zoas</p>
      <Button variant='contained' color='primary'>
        A dark button
      </Button>
      <Button variant='contained' color='secondary'>
        {' '}
        A arcane button{' '}
      </Button>
      <Button variant='outlined' color='primary'>
        {' '}
        A arcane button{' '}
      </Button>
    </div>
  </MuiThemeProvider>
)

export default App
