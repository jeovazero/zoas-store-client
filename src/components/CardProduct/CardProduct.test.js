import React from 'react'
import { render, cleanup } from 'react-testing-library'
import CardProduct from './CardProduct'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'
import 'jest-dom/extend-expect'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CardProduct', () => {
  it('with lack of stock message', () => {
    const { getAllByTitle, queryByText } = render(
      <ThemeProvider theme={theme}>
        <CardProduct
          title='product test'
          image='https://image.com'
          price={20.12}
          isInStock={false}
        />
      </ThemeProvider>
    )

    const [wrapper, image] = getAllByTitle(/product test/i)
    const title = queryByText(/product test/i)
    const price = queryByText(/R\$ 20.12/i)
    expect(wrapper).toBeVisible()
    expect(title).toBeVisible()
    expect(price).toBeVisible()
    expect(image).toBeVisible()
    expect(wrapper).toContainElement(title)
    expect(wrapper).toContainElement(price)
    expect(wrapper).toContainElement(image)
  })
})
