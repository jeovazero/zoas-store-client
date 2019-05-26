// @flow
import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/styles'

type Props = {
  onClickDetails?: () => mixed,
  /** A title for the product card */
  title: string,
  /** A subtitle for the product card */
  subtitle: string,
  /** A price for the product card */
  price: string,
  /** A image for the product card */
  image: string,
  /** To display whether the product has stock */
  isInStock: boolean,
  /* A className */
  className?: string
}

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      display: 'flex',
      padding: theme.spacing(2),
      maxWidth: 480
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    subdetails: {
      display: 'flex',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      justifyContent: 'space-between',
      flexGrow: 1
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

const CardProduct = (props: Props) => {
  const {
    onClickDetails,
    image,
    title,
    subtitle,
    isInStock,
    price,
    className
  } = props

  const classes = useStyles()

  return (
    <Card className={[classes.card, className].join(' ')}>
      <CardMedia className={classes.cover} image={image} title={title} />
      <div className={classes.details}>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='h6'>{subtitle}</Typography>
        <div className={classes.subdetails}>
          <div>
            <Typography>{price}</Typography>
            <Typography className={isInStock ? '' : classes.isDanger}>
              {isInStock ? 'Em estoque' : 'Sem estoque'}
            </Typography>
          </div>
          <Button variant='contained' color='primary' onClick={onClickDetails}>
            Detalhes
          </Button>
        </div>
      </div>
    </Card>
  )
}

CardProduct.defaultProps = {}

export default CardProduct
