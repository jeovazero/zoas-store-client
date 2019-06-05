// @flow
import React from 'react'
import relayEnv from '../relay/createRelay'
import AppBarRender from '../relay/common/AppBarRender'
import { ProductList } from '../relay/containers'
import { graphql, QueryRenderer } from 'react-relay'
import {
  CenterWrapper,
  Title,
  Loader,
  SnackbarError
} from '../components/common'

const Home = () => {
  const [isOpenError, setIsOpenError] = React.useState(false)
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
                setIsOpenError(true)
                return <Loader />
              }
              if (!props) {
                return <Loader />
              }
              return <ProductList data={props.products} />
            }}
          />
          <SnackbarError
            open={isOpenError}
            onClose={() => setIsOpenError(false)}
          />
        </CenterWrapper>
      )}
    </AppBarRender>
  )
}

export default Home
