import React from 'react'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Home, ProductView } from './pages'
import { HashRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/product' component={ProductView} />
    </Router>
  </ThemeProvider>
)

export default App
