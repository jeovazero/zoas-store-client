import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import theme from '../src/theme'
import './style.css'

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

const req = require.context('../src/components', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
