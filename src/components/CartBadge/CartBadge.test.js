import React from 'react'
import { render, cleanup } from 'react-testing-library'
import CartBadge from './CartBadge'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'
import 'jest-dom/extend-expect'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CartBadge', () => {
  it('with label', () => {
    const { queryByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CartBadge color='primary' size='small' quantity={10} price={250} />
      </ThemeProvider>
    )

    const badge = queryByLabelText(/quantidade de items/i)
    const priceLabel = queryByLabelText(/preço total/i)
    const container = queryByLabelText(/carrinho/i)

    // Expecting the visibility
    expect(badge).toBeVisible()
    expect(priceLabel).toBeVisible()
    expect(container).toBeVisible()

    expect(/R\$ 250,00/i.test(priceLabel.innerHTML)).toBeTruthy()

    // Expecting the hierarchy
    expect(container).toContainElement(badge)
    expect(container).toContainElement(priceLabel)
  })
})
