import React from 'react'
import { render, cleanup } from 'react-testing-library'
import AppBarZoas from './AppBarZoas'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CartBadge', () => {
  it('with cart detailed', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <AppBarZoas totalPrice='R$ 10,00' totalProducts='11' />
      </ThemeProvider>
    )

    expect(queryByText(/R\$ 10,00/i)).toBeTruthy()
    expect(queryByText(/11/i)).toBeTruthy()
  })
})
