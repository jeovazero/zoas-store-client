import { configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import theme from '../src/theme'
import './style.css'

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(muiTheme([theme]))

const req = require.context('../src/components', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
