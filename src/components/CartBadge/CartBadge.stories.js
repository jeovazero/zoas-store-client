// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import CartBadge, { CartBadgeComponent } from './CartBadge'

storiesOf('Components', module)
  .addParameters({
    info: {
      propTables: [CartBadgeComponent],
      propTablesExclude: [CartBadge],
      components: {
        CartBadge: CartBadge
      },
      excludedPropTypes: ['classes']
    }
  })
  .add('CartBadge', () => {
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
    const quantity = text('Quantity', '10')
    const label = text('Label', 'R$ 250,00')
    return (
      <CartBadge
        color={color}
        size={size}
        quantity={quantity}
        label={label}
        onClick={action('[CartBadge] :: Clicked')}
      />
    )
  })
