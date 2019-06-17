// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import CartBadge from './CartBadge'

storiesOf('Components', module).add('CartBadge', () => {
  const color = select(
    'Color',
    ['inherit', 'primary', 'secondary', 'disabled'],
    'primary'
  )
  const size = select(
    'Size',
    ['inherit', 'default', 'small', 'large'],
    'default'
  )
  const quantity = number('Quantity', 10)
  const price = number('Price', 250)
  return (
    <CartBadge
      color={color}
      size={size}
      quantity={quantity}
      price={price}
      onClick={action('[CartBadge] :: Clicked')}
    />
  )
})
