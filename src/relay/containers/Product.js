// @flow
import React from 'react'
import ProductDataType from './__generated__/Product_data.graphql'
import { Typography, Button } from '@material-ui/core'
import { graphql, createFragmentContainer } from 'react-relay'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Carousel } from '../../components'
import { Title } from '../../components/common'

type Props = {
  data: ProductDataType,
  onBuy: mixed => mixed
}

const useStyles = makeStyles(theme => {
  return createStyles({
    section: {
      padding: '0 6rem',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      '@media screen and (max-width: 880px)': {
        padding: 0,
        alignItems: 'center'
      }
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      '@media screen and (max-width: 880px)': {
        justifyContent: 'center',
        maxWidth: '480px',
        boxSizing: 'border-box',
        padding: '0.75rem'
      }
    },
    detailsContainer: {
      maxWidth: '380px'
    },
    priceContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 0 2.2rem'
    },
    fontSecondary: {
      fontFamily: theme.typography.fontFamilySecondary,
      fontWeigth: 'bold'
    },
    title: {
      alignText: 'center'
    },
    description: {
      marginTop: '1rem',
      marginBottom: '1rem'
    },
    grey: {
      color: theme.palette.primary.light
    },
    buttonWrapper: {
      textAlign: 'center'
    },
    fullWidth: {
      width: '100%'
    }
  })
})

const Product = (props: Props) => {
  const { data, onBuy } = props
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Title className={classes.title}>{data.title}</Title>
      <div className={classes.wrapper}>
        <Carousel images={data.photos.map(x => x.url)} />
        <div className={classes.detailsContainer}>
          <Typography
            variant='h5'
            className={[classes.description, classes.darkgrey].join(' ')}
          >
            {data.description}
          </Typography>
          <div className={classes.priceContainer}>
            <Typography className={classes.fontSecondary} variant='h4'>
              {`R$ ${data.price.toFixed(2)}`}
            </Typography>
            <Typography className={classes.darkgrey}>
              {data.avaliability ? 'Em estoque' : 'Sem estoque'}
            </Typography>
          </div>
          <div className={classes.buttonWrapper}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={() => onBuy({ productId: data.id, quantity: 1 })}
              className={classes.fullWidth}
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default createFragmentContainer(Product, {
  data: graphql`
    fragment Product_data on Product {
      id
      title
      description
      price
      photos {
        url
      }
      avaliability
    }
  `
})
