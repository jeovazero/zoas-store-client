// @flow
import { AppBarZoas } from '../components'
import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import relay from '../createRelay'

const Home = () => (
  <div>
    <AppBarZoas />
    <div style={{ marginTop: '100px' }}>
      <QueryRenderer
        environment={relay}
        query={graphql`
          query HomeQuery {
            products {
              edges {
                node {
                  id
                }
              }
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <p>{error.message}</p>
          }
          if (!props) {
            return <p>Carregando...</p>
          }
          console.log(props)
          return <div>success</div>
        }}
      />
      <p>hello</p>
    </div>
  </div>
)

export default Home
