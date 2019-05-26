import React from 'react'
import { render, cleanup } from 'react-testing-library'
import CardProduct from './CardProduct'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CardProduct', () => {
  it('with in stock message', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <CardProduct
          title='title'
          image='image'
          subtitle='subtitle'
          price='price'
          isInStock
        />
      </ThemeProvider>
    )

    expect(queryByText(/Em estoque/i)).toBeTruthy()
  })

  it('without in stock message', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <CardProduct
          title='title'
          image='image'
          subtitle='subtitle'
          price='price'
          isInStock={false}
        />
      </ThemeProvider>
    )

    expect(queryByText(/Sem estoque/i)).toBeTruthy()
  })
})
