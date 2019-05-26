import React from 'react'
import theme from './theme'
import { Home } from './pages'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  </MuiThemeProvider>
)

export default App
