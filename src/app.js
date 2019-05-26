import React from 'react'
import theme from './theme'
import { Home } from './pages'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  </ThemeProvider>
)

export default App
