// @flow
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import ShoppingCartOutline from '@material-ui/icons/ShoppingCartOutlined'
import { withStyles } from '@material-ui/core/styles'

type Color = 'inherit' | 'primary' | 'secondary' | 'disabled'

type Size = 'inherit' | 'default' | 'small' | 'large'

type Classes = {
  root: mixed,
  span: mixed,
  badge: mixed
}

type Props = {
  onClick?: () => mixed,
  color: Color,
  /** The size of cart icon */
  size: Size,
  /** Quantity of items in the cart */
  quantity?: string,
  /** A label about price */
  label?: string,
  classes: Classes
}

const styles = theme => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    fontFamily: 'Roboto'
  },
  span: {
    display: 'inline-block',
    fontFamily: theme.typography.fontFamilySecondary,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'inherit',
    marginTop: theme.spacing.unit * -1,
    textAlign: 'center'
  },
  badge: {
    fontFamily: theme.typography.fontFamilySecondary,
    fontWeight: 'bolder'
  }
})

const CartBadge = (props: Props) => {
  const { classes, color, onClick, quantity, size, label } = props

  return (
    <div className={classes.root}>
      <IconButton color={color} onClick={onClick} variant='contained'>
        <Badge
          classes={{ badge: classes.badge }}
          badgeContent={quantity}
          color='secondary'
        >
          <ShoppingCartOutline fontSize={size} color='inherit' />
        </Badge>
      </IconButton>
      {label && (
        <span color='inherit' className={classes.span}>
          {label}
        </span>
      )}
    </div>
  )
}

CartBadge.defaultProps = {
  size: 'default',
  color: 'inherit',
  quantity: ''
}

export const CartBadgeComponent = CartBadge

export default withStyles(styles)(CartBadge)
