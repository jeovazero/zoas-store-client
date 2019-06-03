// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import ProductCart from './ProductCart'

storiesOf('Components', module).add('ProductCart', () => {
  const image = text(
    'image',
    'https://res.cloudinary.com/sohdezoas/image/upload/v1556567196/zoas/Group_3_z9s6ep.jpg'
  )
  const title = text('title', 'Shirt model 2')
  const price = number('price', 2.0)
  const quantity = number('quantity', 2)

  return (
    <ProductCart
      title={title}
      image={image}
      price={price}
      quantity={quantity}
      onChangeQuantity={action('ProductCart :: OnQuantity')}
      onRemove={action('[ProductCart] :: OnRemove')}
    />
  )
})
