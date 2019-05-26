import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
  primary: { main: '#202020' },
  secondary: { main: '#00E5FF' }
}

const themeName = 'Mine Shaft Cyan / Aqua Chuckwalla'

const typography = {
  fontFamily: 'Koho, Roboto, sans-serif',
  fontFamilySecondary: 'Lato, Roboto, sans-serif',
  button: {
    fontWeight: 'bold'
  }
}

export default createMuiTheme({ palette, themeName, typography })
