import React from 'react'
import { render, cleanup } from 'react-testing-library'
import ButtonPrimary from './ButtonPrimary'

// unmount and cleanup DOM
afterEach(cleanup)

it('Should render the Button', () => {
  const { queryByText } = render(<ButtonPrimary>Primary</ButtonPrimary>)

  expect(queryByText(/Primary/i)).toBeTruthy()
})
