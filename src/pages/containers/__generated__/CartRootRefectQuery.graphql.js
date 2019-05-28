/**
 * @flow
 * @relayHash bd2b4260756a55fe649510b6f25997a4
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CartRoot_data$ref = any;
export type CartRootRefectQueryVariables = {||};
export type CartRootRefectQueryResponse = {|
  +cart: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CartRoot_data$ref
  |}>
|};
export type CartRootRefectQuery = {|
  variables: CartRootRefectQueryVariables,
  response: CartRootRefectQueryResponse,
|};
*/

/*
query CartRootRefectQuery {
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
    name: 'CartRootRefectQuery',
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
    name: 'CartRootRefectQuery',
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
    name: 'CartRootRefectQuery',
    id: null,
    text:
      'query CartRootRefectQuery {\n  cart {\n    ...CartRoot_data\n    id\n  }\n}\n\nfragment CartRoot_data on ProductCart {\n  id\n  price\n  quantity\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = 'a894d935e9942760afd607a93f130796';
module.exports = node
