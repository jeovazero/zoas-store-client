// @flow
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { CartBadge } from '..'
import { withStyles } from '@material-ui/core/styles'
import ZoasLogo from './zoas-logo.svg'

type Classes = {
  imgContainer: mixed
}

type Props = {
  onClick: () => mixed,
  /** Total price of products in the cart */
  totalPrice: string,
  /** Quantity of products in the cart */
  totalProducts: string,
  classes: Classes
}

const styles = theme => ({
  imgContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center'
  }
})

const AppBarZoas = (props: Props) => {
  const { classes, totalPrice, totalProducts } = props

  return (
    <AppBar position='static'>
      <Toolbar>
        <div className={classes.imgContainer}>
          <img src={ZoasLogo} />
        </div>
        <CartBadge quantity={totalProducts} label={totalPrice} />
      </Toolbar>
    </AppBar>
  )
}

export const AppBarZoasComponent = AppBarZoas

export default withStyles(styles)(AppBarZoas)
