// @flow
import React from 'react'
import ProductDataType from './__generated__/Product_data.graphql'
import { Typography, Button } from '@material-ui/core'
import { graphql, createFragmentContainer } from 'react-relay'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Carousel } from '../../components'

type Props = {
  data: ProductDataType
}

const useStyles = makeStyles(theme => {
  return createStyles({
    section: {
      padding: '2rem',
      maxWidth: '640px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    wrapper: {
      width: '100%'
    },
    priceContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    title: {
      marginTop: '1rem'
    },
    description: {
      marginTop: '1rem',
      marginBottom: '1rem'
    },
    buttonWrapper: {
      textAlign: 'center'
    }
  })
})

const Product = (props: Props) => {
  const { data } = props
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <Carousel images={data.photos.map(x => x.url)} />
        <Typography variant='h3' className={classes.title}>
          {data.title}
        </Typography>
        <Typography variant='h5' className={classes.description}>
          {data.description}
        </Typography>
        <div className={classes.priceContainer}>
          <Typography variant='h4'> {`R$ ${data.price}`} </Typography>
          <Typography>
            {data.avaliability ? 'Em estoque' : 'Sem estoque'}
          </Typography>
        </div>
        <div className={classes.buttonWrapper}>
          <Button variant='contained' color='primary' size='large'>
            Comprar
          </Button>
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
