// @flow
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ZoasLogo from './zoas-logo.svg'
import { CartBadge } from '..'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  onClick?: () => mixed,
  /** Total price of products in the cart */
  totalPrice: string,
  /** Quantity of products in the cart */
  totalProducts: string,
  /** className */
  className?: string
}

const useStyles = makeStyles(theme => ({
  imgContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center'
  }
}))

const AppBarZoas = (props: Props) => {
  const { totalPrice, totalProducts, className } = props
  const classes = useStyles()

  return (
    <AppBar position='static' className={className}>
      <Toolbar>
        <div className={classes.imgContainer}>
          <img src={ZoasLogo} />
        </div>
        <CartBadge quantity={totalProducts} label={totalPrice} />
      </Toolbar>
    </AppBar>
  )
}

export default AppBarZoas
