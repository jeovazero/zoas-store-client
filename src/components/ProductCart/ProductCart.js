// @flow
import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles, createStyles } from '@material-ui/styles'

type Props = {
  /** Handler for onChangeQuantity */
  onChangeQuantity?: (q: number) => mixed,
  /** Handler for onRemove */
  onRemove?: () => mixed,
  /** A title for the product  */
  title: string,
  /** A subtitle for the product */
  subtitle: string,
  /** A price for the product */
  price: number,
  /** A image for the product */
  image: string,
  /** The quantity for the product */
  quantity: number,
  /** The max quantity for the product on select */
  maxQuantity: number,
  /* A className */
  className?: string
}

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      display: 'flex',
      padding: theme.spacing(2),
      maxWidth: 480,
      borderBottomStyle: 'solid',
      borderWidth: '2px',
      borderColor: theme.palette.primary.light
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      justifyContent: 'center'
    },
    subdetails: {
      display: 'flex',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      justifyContent: 'space-between',
      flexGrow: 1
    },
    price: {
      display: 'inline-flex',
      alignItems: 'center'
    },
    xis: {
      marginLeft: '0.75rem',
      marginRight: '0.75rem'
    },
    cover: {
      minWidth: '120px',
      minHeight: '120px'
    },
    isDanger: {
      color: theme.palette.error.main
    }
  })
)

const ProductCart = (props: Props) => {
  const {
    image,
    title,
    subtitle,
    quantity = 1,
    price,
    maxQuantity = 3,
    onChangeQuantity,
    onRemove,
    className
  } = props

  const classes = useStyles()

  return (
    <div className={[classes.card, className].join(' ')}>
      <CardMedia className={classes.cover} image={image} title={title} />
      <div className={classes.details}>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='h6'>{subtitle}</Typography>
        <div className={classes.subdetails}>
          <div className={classes.price}>
            <Typography>{`R$ ${price}`}</Typography>
            <Typography variant='h6' display='inline' className={classes.xis}>
              x
            </Typography>
            <Select
              value={quantity}
              onChange={e =>
                onChangeQuantity && onChangeQuantity(e.target.value)
              }
            >
              {new Array(maxQuantity).fill(0).map((_, i) => (
                <MenuItem value={i + 1} key={`menuitem-${i}`}>
                  {' '}
                  {i + 1}{' '}
                </MenuItem>
              ))}
            </Select>
          </div>
          <Button variant='outlined' color='primary' onClick={onRemove}>
            Remover
          </Button>
        </div>
        <div>
          <Typography>Total {`R$ ${quantity * price}`}</Typography>
        </div>
      </div>
    </div>
  )
}

ProductCart.defaultProps = {
  quantity: 1,
  maxQuantity: 3
}

export default ProductCart
