// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import ProductCart from './ProductCart'

storiesOf('Components', module).add('ProductCart', () => {
  const image = text(
    'image',
    'https://res.cloudinary.com/sohdezoas/image/upload/v1556567196/zoas/Group_3_z9s6ep.jpg'
  )
  const title = text('title', 'Shirt model 2')
  const subtitle = text('subtitle', 'A shirt of zoas mark')
  const price = text('price', 2.0)
  const quantity = text('quantity', 2)

  return (
    <ProductCart
      title={title}
      image={image}
      subtitle={subtitle}
      price={price}
      quantity={quantity}
      onChangeQuantity={action('ProductCart :: OnQuantity')}
      onRemove={action('[ProductCart] :: OnRemove')}
    />
  )
})
