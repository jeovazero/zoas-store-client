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
        <Typography variant='h3'> {data.title} </Typography>
        <Typography variant='h5'>{data.description}</Typography>
        <div>
          <Typography variant='h4'> {`R$ ${data.price}`} </Typography>
          <Typography>
            {' '}
            {data.avaliability ? 'Em estoque' : 'Sem estoque'}{' '}
          </Typography>
        </div>
        <Button variant='contained' color='primary'>
          Comprar
        </Button>
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
