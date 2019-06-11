import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: { main: '#202020' },
  secondary: { main: '#00E5FF' }
}

const themeName = 'Mine Shaft Cyan / Aqua Chuckwalla'

const typography = {
  fontFamily: 'Lato, Roboto, sans-serif',
  fontFamilySecondary: 'Kreon, Roboto, sans-serif',
  button: {
    fontWeight: 'bold'
  }
}

const breakpoints = {
  keys: ['xxs', 'xs', 'sm', 'md'],
  values: {
    xxs: 320,
    xs: 480,
    sm: 640,
    md: 960
  }
}

export default createMuiTheme({ palette, themeName, typography, breakpoints })
