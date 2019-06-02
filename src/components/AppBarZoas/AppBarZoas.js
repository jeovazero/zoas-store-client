// @flow
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ZoasLogo from './zoas-logo.svg'
import { CartBadge } from '..'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  onClickLogo?: () => mixed,
  onClickCart?: () => mixed,
  /** Total price of products in the cart */
  totalPrice: number,
  /** Quantity of products in the cart */
  totalProducts: number,
  /** className */
  className?: string
}

const useStyles = makeStyles(theme => ({
  imgContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  toolbar: {
    [theme.breakpoints.up('md')]: {
      width: '940px',
      margin: 'auto',
      boxSizing: 'border-box'
    }
  }
}))

const AppBarZoas = (props: Props) => {
  const {
    totalPrice,
    totalProducts,
    className,
    onClickLogo,
    onClickCart
  } = props
  const classes = useStyles()

  return (
    <AppBar
      position='static'
      className={[className, classes.appbar].join(' ')}
      aria-label='barra do app'
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.imgContainer} onClick={onClickLogo}>
          <img src={ZoasLogo} alt='zoas logo' aria-label='zoas logo' />
        </div>
        <CartBadge
          quantity={totalProducts}
          label={totalPrice}
          onClick={onClickCart}
        />
      </Toolbar>
    </AppBar>
  )
}

export default AppBarZoas
