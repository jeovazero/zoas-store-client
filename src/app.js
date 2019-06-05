import React from 'react'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HomeView, ProductView, CartView, CheckoutView } from './pages'
import { HashRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Route exact path='/' component={HomeView} />
      <Route path='/product' component={ProductView} />
      <Route path='/mycart' component={CartView} />
      <Route path='/checkout' component={CheckoutView} />
    </Router>
  </ThemeProvider>
)

export default App
