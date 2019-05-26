/**
 * @flow
 * @relayHash 4dc47530cf31a50c0eda6c4f7b2b5813
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductList_data$ref = any;
export type HomeQueryVariables = {||};
export type HomeQueryResponse = {|
  +products: ?{|
    +$fragmentRefs: ProductList_data$ref
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
    ...ProductList_data
  }
}

fragment ProductList_data on ProductConnection {
  edges {
    node {
      id
      title
      description
      price
      photos {
        url
      }
      avaliability
    }
  }
}
*/

const node /*: ConcreteRequest*/ = {
  kind: 'Request',
  fragment: {
    kind: 'Fragment',
    name: 'HomeQuery',
    type: 'Query',
    metadata: null,
    argumentDefinitions: [],
    selections: [
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
            kind: 'FragmentSpread',
            name: 'ProductList_data',
            args: null
          }
        ]
      }
    ]
  },
  operation: {
    kind: 'Operation',
    name: 'HomeQuery',
    argumentDefinitions: [],
    selections: [
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
          }
        ]
      }
    ]
  },
  params: {
    operationKind: 'query',
    name: 'HomeQuery',
    id: null,
    text:
      'query HomeQuery {\n  products {\n    ...ProductList_data\n  }\n}\n\nfragment ProductList_data on ProductConnection {\n  edges {\n    node {\n      id\n      title\n      description\n      price\n      photos {\n        url\n      }\n      avaliability\n    }\n  }\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = 'c9d6f1e91cab0ec504886f3563a68a9b';
module.exports = node
