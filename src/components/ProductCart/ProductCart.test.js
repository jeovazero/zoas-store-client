import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import ProductCart from './ProductCart'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'
import 'jest-dom/extend-expect'

// unmount and cleanup DOM
afterEach(cleanup)

const Component = () => {
  const [quantity, setQuantity] = React.useState(1)
  return (
    <ThemeProvider theme={theme}>
      <ProductCart
        title='produto teste'
        image='https://image.com'
        price={4.0}
        quantity={quantity}
        onChangeQuantity={setQuantity}
      />
    </ThemeProvider>
  )
}

describe('Should render a ProductCart', () => {
  it('with the select on 177', () => {
    const { queryByLabelText } = render(<Component />)

    const decButton = queryByLabelText(/decrementar/i)
    const incButton = queryByLabelText(/incrementar/i)

    const inputQuantity = queryByLabelText(/quantidade do produto/i)
    expect(inputQuantity).toBeVisible()

    const price = queryByLabelText(/preço/i)
    expect(price).toBeVisible()

    const title = queryByLabelText(/nome do produto/i)
    expect(title).toBeVisible()

    // initial value
    expect(inputQuantity.value).toBe('1')

    // decrement, but the minimum is "1"
    fireEvent.click(decButton)
    expect(inputQuantity.value).toBe('1')

    // increment
    fireEvent.click(incButton)
    expect(inputQuantity.value).toBe('2')

    // increment
    fireEvent.click(incButton)
    expect(inputQuantity.value).toBe('3')

    // decrement
    fireEvent.click(decButton)
    expect(inputQuantity.value).toBe('2')
  })
})
