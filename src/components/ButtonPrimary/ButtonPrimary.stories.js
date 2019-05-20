// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import ButtonPrimary from './ButtonPrimary'

storiesOf('Components', module).add('Button', () => {
  const label = text('Label', 'Primary')
  return <ButtonPrimary> {label} </ButtonPrimary>
})
