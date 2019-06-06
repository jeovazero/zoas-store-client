import uuidv4 from 'uuid/v4'
import environment from '../createRelay'
import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation PutProductMutation($input: PutProductToCartInput!) {
    putProductToCart(input: $input) {
      payload {
        id
        title
        price
      }
      clientMutationId
    }
  }
`

export default ({ productId, quantity = 1 }, onComplete, onError) => {
  const clientMutationId = uuidv4()
  const variables = {
    input: {
      clientMutationId,
      id: productId,
      quantity
    }
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('put product mutation', { response, errors })
      if (!errors) onComplete()
      else {
        console.log('chama')
        onError(errors)
      }
    },
    onError: err => {
      onError && onError(err)
      console.error(err)
    }
  })
}
