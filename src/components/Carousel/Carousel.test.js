import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Carousel from './Carousel'

// unmount and cleanup DOM
afterEach(cleanup)

const imagesList = ['image1', 'image2', 'image3']

describe('Should render a Carousel', () => {
  it('showing the first image', () => {
    const { container } = render(<Carousel images={imagesList} />)

    const card = container.querySelector('div:nth-of-type(2) div')
    const style = card.getAttribute('style')

    expect(new RegExp(imagesList[0], 'gi').test(style)).toBeTruthy()
  })

  it('and clicking in the arrow controls', () => {
    jest.useFakeTimers()
    const { getByTestId, container } = render(<Carousel images={imagesList} />)

    const getCard = () => container.querySelector('div:nth-of-type(2) div')
    const arrowLeft = getByTestId('arrow-left')
    const arrowRight = getByTestId('arrow-right')

    // Expecting the first image
    const style1 = getCard().getAttribute('style')
    expect(new RegExp(imagesList[0], 'gi').test(style1)).toBeTruthy()

    // click in the arrow right (expect the second image)
    fireEvent.click(arrowRight)
    jest.advanceTimersByTime(1000)
    const style2 = getCard().getAttribute('style')
    expect(new RegExp(imagesList[1], 'gi').test(style2)).toBeTruthy()

    // click in the arrow left (expect the first image)
    fireEvent.click(arrowLeft)
    jest.advanceTimersByTime(2000)
    const style3 = getCard().getAttribute('style')
    expect(new RegExp(imagesList[0], 'gi').test(style3)).toBeTruthy()
  })
})
