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
  quantity?: number,
  /** The price of items in the cart */
  price?: number,
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

const formatMoney = (n: number) => n.toFixed(2).replace('.', ',')

const CartBadge = (props: Props) => {
  const { className, color, onClick, quantity, size, price } = props
  const classes = useStyles()
  const label = price ? `R$ ${formatMoney(price)}` : null
  return (
    <div className={[className, classes.root].join(' ')} aria-label='carrinho'>
      <IconButton color={color} onClick={onClick} variant='contained'>
        <Badge
          classes={{ badge: classes.badge }}
          badgeContent={quantity}
          color='secondary'
          max={99}
          title={`${quantity || 0} items`}
          aria-label='quantidade de items'
        >
          <ShoppingCartOutline fontSize={size} color='inherit' />
        </Badge>
      </IconButton>

      {label && (
        <span
          color='inherit'
          className={classes.span}
          title={label}
          aria-label='preço total'
        >
          {label}
        </span>
      )}
    </div>
  )
}

CartBadge.defaultProps = {
  size: 'default',
  color: 'inherit'
}

export default CartBadge
