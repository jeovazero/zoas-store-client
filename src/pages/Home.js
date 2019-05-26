// @flow
import React from 'react'
import relay from '../createRelay'
import ProductList from './ProductList'
import CircularProgress from '@material-ui/core/CircularProgress'
import { AppBarZoas } from '../components'
import { makeStyles } from '@material-ui/styles'
import { graphql, QueryRenderer } from 'react-relay'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  loader: {
    padding: '2rem'
  }
})

const Home = () => {
  const classes = useStyles()

  return (
    <div>
      <AppBarZoas />
      <div className={classes.root}>
        <QueryRenderer
          environment={relay}
          query={graphql`
            query HomeQuery {
              products {
                ...ProductList_data
              }
            }
          `}
          variables={{}}
          render={({ error, props }) => {
            if (error) {
              return <p>{error.message}</p>
            }
            if (!props) {
              return (
                <div className={classes.loader}>
                  <CircularProgress />
                </div>
              )
            }
            return <ProductList data={props.products} />
          }}
        />
      </div>
    </div>
  )
}

export default Home
