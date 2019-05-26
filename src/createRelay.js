// @flow
import fetch from 'node-fetch'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const API_URL = process.env.API_URL || 'http://localhost:3000'

function fetchQuery (operation, variables) {
  return fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)
const store = new Store(new RecordSource())

const environment = new Environment({
  network,
  store
})

export default environment
