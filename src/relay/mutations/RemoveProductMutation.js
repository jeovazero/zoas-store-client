import uuidv4 from 'uuid/v4'
import environment from '../createRelay'
import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation RemoveProductMutation($input: RemoveProductOfCartInput!) {
    removeProductOfCart(input: $input) {
      payload {
        id
        title
        price
      }
      clientMutationId
    }
  }
`

export default ({ productId }, onComplete) => {
  const clientMutationId = uuidv4()
  const variables = {
    input: {
      clientMutationId,
      id: productId
    }
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('remove product mutation')
      onComplete()
    },
    onError: err => console.error(err)
  })
}
