import React from 'react'
import { render, cleanup } from 'react-testing-library'
import AppBarZoas from './AppBarZoas'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'
import 'jest-dom/extend-expect'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CartBadge', () => {
  it('with cart detailed', () => {
    const { queryByLabelText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <AppBarZoas totalPrice={10.53} totalProducts='85' />
      </ThemeProvider>
    )

    const container = queryByLabelText(/barra do app/i)
    const logo = queryByLabelText(/zoas logo/i)
    const cart = queryByLabelText(/carrinho/i)

    expect(container).toBeVisible()
    expect(logo).toBeVisible()
    expect(cart).toBeVisible()

    expect(container).toContainElement(logo)
    expect(container).toContainElement(cart)

    // price of cart
    expect(queryByText(/R\$ 10,53/i)).toBeVisible()

    // label of cart
    expect(queryByText(/85/i)).toBeTruthy()
  })
})
