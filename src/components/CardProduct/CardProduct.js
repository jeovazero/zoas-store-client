// @flow
import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

type Classes = {
  card: mixed,
  details: mixed,
  subdetails: mixed,
  isDanger: mixed,
  cover: mixed
}

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
  classes: Classes
}

const styles = theme => ({
  card: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
    maxWidth: 480
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit
  },
  subdetails: {
    display: 'flex',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
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

const CardProduct = (props: Props) => {
  const {
    classes,
    onClickDetails,
    image,
    title,
    subtitle,
    isInStock,
    price
  } = props

  return (
    <Card className={classes.card}>
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

export const CardProductComponent = CardProduct

export default withStyles(styles)(CardProduct)
