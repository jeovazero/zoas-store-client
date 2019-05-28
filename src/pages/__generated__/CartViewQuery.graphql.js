/**
 * @flow
 * @relayHash fd0f798d3ab3465c179ae445ef5c1aa2
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductCartList_data$ref = any;
export type CartViewQueryVariables = {||};
export type CartViewQueryResponse = {|
  +cart: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ProductCartList_data$ref
  |}>
|};
export type CartViewQuery = {|
  variables: CartViewQueryVariables,
  response: CartViewQueryResponse,
|};
*/

/*
query CartViewQuery {
  cart {
    ...ProductCartList_data
    id
  }
}

fragment ProductCartList_data on ProductCart {
  id
  title
  description
  price
  photos {
    url
  }
  quantity
}
*/

const node /*: ConcreteRequest*/ = {
  kind: 'Request',
  fragment: {
    kind: 'Fragment',
    name: 'CartViewQuery',
    type: 'Query',
    metadata: null,
    argumentDefinitions: [],
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'cart',
        storageKey: null,
        args: null,
        concreteType: 'ProductCart',
        plural: true,
        selections: [
          {
            kind: 'FragmentSpread',
            name: 'ProductCartList_data',
            args: null
          }
        ]
      }
    ]
  },
  operation: {
    kind: 'Operation',
    name: 'CartViewQuery',
    argumentDefinitions: [],
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'cart',
        storageKey: null,
        args: null,
        concreteType: 'ProductCart',
        plural: true,
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
            concreteType: 'PhotoProductCart',
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
            name: 'quantity',
            args: null,
            storageKey: null
          }
        ]
      }
    ]
  },
  params: {
    operationKind: 'query',
    name: 'CartViewQuery',
    id: null,
    text:
      'query CartViewQuery {\n  cart {\n    ...ProductCartList_data\n    id\n  }\n}\n\nfragment ProductCartList_data on ProductCart {\n  id\n  title\n  description\n  price\n  photos {\n    url\n  }\n  quantity\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = 'eeb48178e3e4aa4a9149a472c2a1dc2a';
module.exports = node
