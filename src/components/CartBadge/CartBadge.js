// @flow
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import ShoppingCartOutline from '@material-ui/icons/ShoppingCartOutlined'
import { makeStyles, createStyles } from '@material-ui/styles'

type Color = 'inherit' | 'primary' | 'secondary' | 'disabled'

type Size = 'inherit' | 'default' | 'small' | 'large'

type Props = {
  onClick?: () => mixed,
  color: Color,
  /** The size of cart icon */
  size: Size,
  /** Quantity of items in the cart */
  quantity?: string,
  /** A label about price */
  label?: string,
  /* A className */
  className?: string
}

const useStyles = makeStyles(theme =>
  createStyles({
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
      marginTop: theme.spacing(-1),
      textAlign: 'center'
    },
    badge: {
      fontFamily: theme.typography.fontFamilySecondary,
      fontWeight: 'bolder'
    }
  })
)

const CartBadge = (props: Props) => {
  const { className, color, onClick, quantity = '', size, label } = props
  const classes = useStyles()
  const quantitySan = quantity.length === 0 ? null : quantity

  return (
    <div className={[className, classes.root].join(' ')}>
      <IconButton color={color} onClick={onClick} variant='contained'>
        <Badge
          classes={{ badge: classes.badge }}
          badgeContent={quantitySan}
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

export default CartBadge
