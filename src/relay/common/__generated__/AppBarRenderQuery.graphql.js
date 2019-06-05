/**
 * @flow
 * @relayHash 30910149bb758c5aa4e284c2083bec24
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppBar_data$ref = any;
export type AppBarRenderQueryVariables = {||};
export type AppBarRenderQueryResponse = {|
  +cart: ?$ReadOnlyArray<?{|
    +$fragmentRefs: AppBar_data$ref
  |}>
|};
export type AppBarRenderQuery = {|
  variables: AppBarRenderQueryVariables,
  response: AppBarRenderQueryResponse,
|};
*/

/*
query AppBarRenderQuery {
  cart {
    ...AppBar_data
    id
  }
}

fragment AppBar_data on ProductCart {
  id
  price
  quantity
}
*/

const node /*: ConcreteRequest*/ = {
  kind: 'Request',
  fragment: {
    kind: 'Fragment',
    name: 'AppBarRenderQuery',
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
            name: 'AppBar_data',
            args: null
          }
        ]
      }
    ]
  },
  operation: {
    kind: 'Operation',
    name: 'AppBarRenderQuery',
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
    name: 'AppBarRenderQuery',
    id: null,
    text:
      'query AppBarRenderQuery {\n  cart {\n    ...AppBar_data\n    id\n  }\n}\n\nfragment AppBar_data on ProductCart {\n  id\n  price\n  quantity\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = 'c90b17f250b6ab3600c59769cf6dc7ff';
module.exports = node
