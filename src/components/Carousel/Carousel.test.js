import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Carousel from './Carousel'
import theme from '../../theme.js'
import { ThemeProvider } from '@material-ui/styles'
import 'jest-dom/extend-expect'

// unmount and cleanup DOM
afterEach(cleanup)

const imagesList = ['image1', 'image2', 'image3']

describe('Should render a Carousel', () => {
  it('and click in the arrow controls', () => {
    const { getByLabelText, getAllByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Carousel images={imagesList} />
      </ThemeProvider>
    )

    const arrowLeft = getByLabelText(/imagem anterior/i)
    const arrowRight = getByLabelText(/próxima imagem/i)
    const images = getAllByLabelText(/imagem do produto/i)
    const containerImages = images[0].parentElement
    const getRightValue = el => window.getComputedStyle(el)._values.right
    const getWidthValue = el => window.getComputedStyle(el)._values.width

    expect(images[0]).toBeVisible()
    expect(images[1]).toBeVisible()
    expect(images[2]).toBeVisible()
    expect(arrowLeft).toBeVisible()
    expect(arrowRight).toBeVisible()

    // The width of image wrapper
    const widthBase = parseInt(getWidthValue(images[0]))

    // The idea of carousel is the right shift changing the displayed image
    expect(getRightValue(containerImages)).toBe('0px')

    fireEvent.click(arrowRight)
    expect(getRightValue(containerImages)).toBe(`${widthBase}px`)

    fireEvent.click(arrowRight)
    expect(getRightValue(containerImages)).toBe(`${widthBase * 2}px`)

    fireEvent.click(arrowLeft)
    expect(getRightValue(containerImages)).toBe(`${widthBase}px`)
  })
})
