import React from 'react'
import { render, cleanup } from 'react-testing-library'
import ProductCart from './ProductCart'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a ProductCart', () => {
  it('with the select on 177', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <ProductCart
          title='title of the product'
          image='image'
          subtitle='subtitle'
          price='price'
          quantity={177}
          maxQuantity={178}
        />
      </ThemeProvider>
    )

    const select = queryByText(/177/i)
    const isSelect = Array.from(select.classList).some(x => /select/.test(x))
    expect(isSelect).toBeTruthy()
    expect(queryByText(/title of the product/i)).toBeTruthy()
  })
})
