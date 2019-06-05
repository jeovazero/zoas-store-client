// @flow
import React from 'react'
import relayEnv from '../relay/createRelay'
import AppBarRender from '../relay/common/AppBarRender'
import { ProductList } from '../relay/containers'
import { styled } from '@material-ui/styles'
import { graphql, QueryRenderer } from 'react-relay'
import { Typography, CircularProgress } from '@material-ui/core'

const CenterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: theme.breakpoints.values['md']
}))

const Loader = styled(CircularProgress)({
  padding: '2rem'
})

const Title = styled(props => <Typography variant='h4' {...props} />)({
  padding: '2rem 1rem',
  width: '100%'
})

const Home = () => {
  return (
    <AppBarRender>
      {() => (
        <CenterWrapper>
          <Title>Produtos</Title>
          <QueryRenderer
            environment={relayEnv}
            query={graphql`
              query HomeViewQuery {
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
                return <Loader />
              }
              return <ProductList data={props.products} />
            }}
          />
        </CenterWrapper>
      )}
    </AppBarRender>
  )
}

export default Home
