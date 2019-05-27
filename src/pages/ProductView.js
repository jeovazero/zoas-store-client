import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import qs from 'querystring'
import relay from '../createRelay'
import { Product } from './containers'
import { AppBarZoas } from '../components'
import { makeStyles } from '@material-ui/styles'
import { Redirect } from 'react-router-dom'
import { graphql, QueryRenderer } from 'react-relay'

type Props = {
  history: {
    location: {
      search: string
    }
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const ProductView = (props: Props) => {
  const { history } = props
  const query = history.location.search.slice(1)
  const obj = qs.parse(query)

  if (!obj || obj['id'].length === 0) {
    return <Redirect to='/' />
  }

  const classes = useStyles()

  return (
    <div>
      <AppBarZoas />
      <div className={classes.root}>
        <QueryRenderer
          environment={relay}
          query={graphql`
            query ProductViewQuery($id: ID!) {
              product(id: $id) {
                ...Product_data
              }
            }
          `}
          variables={{ id: obj['id'] }}
          render={({ error, props }) => {
            if (error) {
              return <p>{error.message}</p>
            }
            if (!props) {
              return (
                <div style={{ padding: '2rem' }}>
                  <CircularProgress />
                </div>
              )
            }
            console.log(props)
            return <Product data={props.product} />
          }}
        />
      </div>
    </div>
  )
}

export default ProductView
