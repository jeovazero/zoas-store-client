// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import AppBarZoas, { AppBarZoasComponent } from './AppBarZoas'

storiesOf('Components', module)
  .addParameters({
    info: {
      propTables: [AppBarZoasComponent],
      propTablesExclude: [AppBarZoas]
    }
  })
  .add('AppBarZoas', () => {
    const quantity = text('Quantity', '10')
    const price = text('Price', 'R$ 10,00')
    return <AppBarZoas totalProducts={quantity} totalPrice={price} />
  })
