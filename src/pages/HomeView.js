// @flow
import React from 'react'
import relayEnv from '../relay/createRelay'
import AppBarRender from '../relay/common/AppBarRender'
import { ProductList } from '../relay/containers'
import { graphql, QueryRenderer } from 'react-relay'
import { CenterWrapper, Title, Loader } from '../components/common'

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
