/**
 * @flow
 * @relayHash 4f0c58df79e054c2360174506ee710c3
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Product_data$ref = any;
export type ProductViewQueryVariables = {|
  id: string
|};
export type ProductViewQueryResponse = {|
  +product: ?{|
    +$fragmentRefs: Product_data$ref
  |}
|};
export type ProductViewQuery = {|
  variables: ProductViewQueryVariables,
  response: ProductViewQueryResponse,
|};
*/

/*
query ProductViewQuery(
  $id: ID!
) {
  product(id: $id) {
    ...Product_data
    id
  }
}

fragment Product_data on Product {
  id
  title
  description
  price
  photos {
    url
  }
  avaliability
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'id',
        type: 'ID!',
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id'
      }
    ]
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'ProductViewQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'product',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: 'Product',
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'Product_data',
              args: null
            }
          ]
        }
      ]
    },
    operation: {
      kind: 'Operation',
      name: 'ProductViewQuery',
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'product',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: 'Product',
          plural: false,
          selections: [
            {
              kind: 'ScalarField',
              alias: null,
              name: 'id',
              args: null,
              storageKey: null
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'title',
              args: null,
              storageKey: null
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'description',
              args: null,
              storageKey: null
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'price',
              args: null,
              storageKey: null
            },
            {
              kind: 'LinkedField',
              alias: null,
              name: 'photos',
              storageKey: null,
              args: null,
              concreteType: 'Photo',
              plural: true,
              selections: [
                {
                  kind: 'ScalarField',
                  alias: null,
                  name: 'url',
                  args: null,
                  storageKey: null
                }
              ]
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'avaliability',
              args: null,
              storageKey: null
            }
          ]
        }
      ]
    },
    params: {
      operationKind: 'query',
      name: 'ProductViewQuery',
      id: null,
      text:
        'query ProductViewQuery(\n  $id: ID!\n) {\n  product(id: $id) {\n    ...Product_data\n    id\n  }\n}\n\nfragment Product_data on Product {\n  id\n  title\n  description\n  price\n  photos {\n    url\n  }\n  avaliability\n}\n',
      metadata: {}
    }
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '2b8b2d48389bf07f36b83015ab984d3d';
module.exports = node
