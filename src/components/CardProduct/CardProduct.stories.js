// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import CardProduct from './CardProduct'

storiesOf('Components', module).add('CardProduct', () => {
  const image = text(
    'image',
    'https://res.cloudinary.com/sohdezoas/image/upload/v1556567196/zoas/Group_3_z9s6ep.jpg'
  )
  const title = text('title', 'Shirt model 2')
  const price = number('price', 2.12)
  const isInStock = boolean('isInStock', false)

  return (
    <CardProduct
      title={title}
      image={image}
      price={price}
      isInStock={isInStock}
      onClick={action('[CardProduct] :: Clicked')}
    />
  )
})
