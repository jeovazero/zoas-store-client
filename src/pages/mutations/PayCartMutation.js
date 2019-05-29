import uuidv4 from 'uuid/v4'
import environment from '../../createRelay'
import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation PayCartMutation($input: PayCartInput!) {
    payCart(input: $input) {
      payload {
        customer
        totalPaid
      }
      clientMutationId
    }
  }
`

export default ({ fullName, address, creditCard }, onComplete) => {
  const clientMutationId = uuidv4()
  const variables = {
    input: {
      clientMutationId,
      address,
      creditCard,
      fullName
    }
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('pay cart mutation')
      onComplete({ error: errors, response })
    },
    onError: err => console.error(err)
  })
}
