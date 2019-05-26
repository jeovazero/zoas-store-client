import React from 'react'
import { render, cleanup } from 'react-testing-library'
import CardProduct from './CardProduct'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CardProduct', () => {
  it('with in stock message', () => {
    const { queryByText } = render(
      <CardProduct
        title='title'
        image='image'
        subtitle='subtitle'
        price='price'
        isInStock
      />
    )

    expect(queryByText(/Em estoque/i)).toBeTruthy()
  })

  it('without in stock message', () => {
    const { queryByText } = render(
      <CardProduct
        title='title'
        image='image'
        subtitle='subtitle'
        price='price'
        isInStock={false}
      />
    )

    expect(queryByText(/Sem estoque/i)).toBeTruthy()
  })
})
