// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import AppBarZoas from './AppBarZoas'

storiesOf('Components', module).add('AppBarZoas', () => {
  const quantity = text('Quantity', '10')
  const price = number('Price', 10.53)

  return (
    <AppBarZoas
      totalProducts={quantity}
      totalPrice={price}
      onClickCart={action('AppBarZoas :: onClickCart')}
      onClickLogo={action('AppBarZoas :: onClickLogo')}
    />
  )
})
