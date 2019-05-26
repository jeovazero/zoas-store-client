import React from 'react'
import { render, cleanup } from 'react-testing-library'
import CartBadge from './CartBadge'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CartBadge', () => {
  it('with label', () => {
    const { queryByText } = render(
      <CartBadge color='primary' size='small' quantity='10' label='R$ 250,00' />
    )

    expect(queryByText(/R\$ 250,00/i)).toBeTruthy()
    expect(queryByText(/10/i)).toBeTruthy()
  })
})
