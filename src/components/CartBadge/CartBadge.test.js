import React from 'react'
import { render, cleanup } from 'react-testing-library'
import CartBadge from './CartBadge'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CartBadge', () => {
  it('with label', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <CartBadge
          color='primary'
          size='small'
          quantity='10'
          label='R$ 250,00'
        />
      </ThemeProvider>
    )

    expect(queryByText(/R\$ 250,00/i)).toBeTruthy()
    expect(queryByText(/10/i)).toBeTruthy()
  })
})
