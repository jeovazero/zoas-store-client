/**
 * @flow
 * @relayHash f441f2a098d2f5704422239c9d70a814
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppBar_data$ref = any;
export type AppBarRefetchQueryVariables = {||};
export type AppBarRefetchQueryResponse = {|
  +cart: ?$ReadOnlyArray<?{|
    +$fragmentRefs: AppBar_data$ref
  |}>
|};
export type AppBarRefetchQuery = {|
  variables: AppBarRefetchQueryVariables,
  response: AppBarRefetchQueryResponse,
|};
*/

/*
query AppBarRefetchQuery {
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
    name: 'AppBarRefetchQuery',
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
    name: 'AppBarRefetchQuery',
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
    name: 'AppBarRefetchQuery',
    id: null,
    text:
      'query AppBarRefetchQuery {\n  cart {\n    ...AppBar_data\n    id\n  }\n}\n\nfragment AppBar_data on ProductCart {\n  id\n  price\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = 'e7e0b176b8a6d1b94893f8040d190071';
module.exports = node
