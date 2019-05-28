/**
 * @flow
 * @relayHash f654c60acde2315fe20d508ef95ee2e7
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
      'query AppBarRenderQuery {\n  cart {\n    ...AppBar_data\n    id\n  }\n}\n\nfragment AppBar_data on ProductCart {\n  id\n  price\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = 'c90b17f250b6ab3600c59769cf6dc7ff';
module.exports = node
