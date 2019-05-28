import uuidv4 from 'uuid/v4'
import environment from '../../createRelay'
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

export default ({ productId, quantity = 1 }, onComplete) => {
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
      console.log('put product mutation')
      onComplete()
    },
    onError: err => console.error(err)
  })
}
