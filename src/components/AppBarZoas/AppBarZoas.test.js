import React from 'react'
import { render, cleanup } from 'react-testing-library'
import AppBarZoas from './AppBarZoas'

// unmount and cleanup DOM
afterEach(cleanup)

describe('Should render a CartBadge', () => {
  it('with cart detailed', () => {
    const { queryByText } = render(
      <AppBarZoas totalPrice='R$ 10,00' totalProducts='11' />
    )

    expect(queryByText(/R\$ 10,00/i)).toBeTruthy()
    expect(queryByText(/11/i)).toBeTruthy()
  })
})
