import { configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/theme'

const req = require.context('../src/components', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addDecorator(muiTheme([theme]))

configure(loadStories, module)
