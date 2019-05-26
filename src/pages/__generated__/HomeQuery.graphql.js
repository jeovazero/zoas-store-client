/**
 * @flow
 * @relayHash d20c1a5f8b52dedd8802aebe8ec2c11d
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeQueryVariables = {||};
export type HomeQueryResponse = {|
  +products: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string
      |}
    |}>
  |}
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/

/*
query HomeQuery {
  products {
    edges {
      node {
        id
      }
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
    {
      kind: 'LinkedField',
      alias: null,
      name: 'products',
      storageKey: null,
      args: null,
      concreteType: 'ProductConnection',
      plural: false,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'edges',
          storageKey: null,
          args: null,
          concreteType: 'ProductEdge',
          plural: true,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'node',
              storageKey: null,
              args: null,
              concreteType: 'Product',
              plural: false,
              selections: [
                {
                  kind: 'ScalarField',
                  alias: null,
                  name: 'id',
                  args: null,
                  storageKey: null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'HomeQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: [],
      selections: (v0 /*: any*/)
    },
    operation: {
      kind: 'Operation',
      name: 'HomeQuery',
      argumentDefinitions: [],
      selections: (v0 /*: any*/)
    },
    params: {
      operationKind: 'query',
      name: 'HomeQuery',
      id: null,
      text:
        'query HomeQuery {\n  products {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n',
      metadata: {}
    }
  }
})()
// prettier-ignore
;(node/*: any*/).hash = 'ab1a1829341e58c148036e913634a92b';
module.exports = node
