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
  span: mixed
}

type Props = {
  onClick: () => mixed,
  color: Color,
  /** The size of cart icon */
  size: Size,
  /** Quantity of items in the cart */
  quantity: string,
  /** A label about price */
  label: string,
  classes: Classes
}

const styles = theme => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column'
  },
  span: {
    display: 'inline-block',
    fontFamily: theme.typography.fontFamilySecondary,
    fontSize: 10,
    fontWeight: 'bold',
    color: theme.palette.primary.light,
    textAlign: 'center'
  }
})

const CartBadge = (props: Props) => (
  <div className={props.classes.root}>
    <IconButton color={props.color} onClick={props.onClick} variant='contained'>
      <Badge badgeContent={props.quantity} color='secondary'>
        <ShoppingCartOutline fontSize={props.size} color='inherit' />
      </Badge>
    </IconButton>
    {props.label && <span className={props.classes.span}>{props.label}</span>}
  </div>
)

export const CartBadgeComponent = CartBadge

export default withStyles(styles)(CartBadge)
