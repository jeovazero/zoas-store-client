import uuidv4 from 'uuid/v4'
import environment from '../createRelay'
import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation CreateCartMutation($input: CreateCartInput!) {
    createCart(input: $input) {
      confirmation
    }
  }
`

export default ({ onComplete }) => {
  const clientMutationId = uuidv4()
  const variables = {
    input: {
      clientMutationId
    }
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.', response)
      onComplete()
    },
    onError: err => console.error(err)
  })
}
