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
  SnackbarError,
  Footer
} from '../components/common'
import { styled } from '@material-ui/styles'

const Title2 = styled(Title)({
  padding: '2rem 0.75rem'
})

const Home = () => {
  const [errorState, setErrorState] = React.useState('INITIAL') // INITIAL, SHOW, HIDDEN
  return (
    <AppBarRender>
      {() => (
        <>
          <CenterWrapper>
            <Title2>Produtos</Title2>
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
                  if (errorState === 'INITIAL') {
                    console.log('initial')
                    setErrorState('SHOW')
                  }
                  return <Loader />
                }
                if (!props) {
                  return <Loader />
                }
                return <ProductList data={props.products} />
              }}
            />
            <SnackbarError
              open={errorState === 'SHOW'}
              onClose={() => {
                setErrorState('HIDDEN')
              }}
            />
          </CenterWrapper>
          <Footer />
        </>
      )}
    </AppBarRender>
  )
}

export default Home
