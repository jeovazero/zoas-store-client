/**
 * @flow
 * @relayHash 5ffd4b90129cbf3010e3341f5b32cf7e
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CartRoot_data$ref = any;
export type CartRootRenderQueryVariables = {||};
export type CartRootRenderQueryResponse = {|
  +cart: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CartRoot_data$ref
  |}>
|};
export type CartRootRenderQuery = {|
  variables: CartRootRenderQueryVariables,
  response: CartRootRenderQueryResponse,
|};
*/

/*
query CartRootRenderQuery {
  cart {
    ...CartRoot_data
    id
  }
}

fragment CartRoot_data on ProductCart {
  id
  price
  quantity
}
*/

const node /*: ConcreteRequest*/ = {
  kind: 'Request',
  fragment: {
    kind: 'Fragment',
    name: 'CartRootRenderQuery',
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
            name: 'CartRoot_data',
            args: null
          }
        ]
      }
    ]
  },
  operation: {
    kind: 'Operation',
    name: 'CartRootRenderQuery',
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
            name: 'price',
            args: null,
            storageKey: null
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
    name: 'CartRootRenderQuery',
    id: null,
    text:
      'query CartRootRenderQuery {\n  cart {\n    ...CartRoot_data\n    id\n  }\n}\n\nfragment CartRoot_data on ProductCart {\n  id\n  price\n  quantity\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = '08da8e9b263805186b80380728c59b45';
module.exports = node
