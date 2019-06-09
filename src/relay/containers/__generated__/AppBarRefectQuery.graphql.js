/**
 * @flow
 * @relayHash 8ee33a5bbf115aee6b4d67c981569d7c
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppBar_data$ref = any;
export type AppBarRefectQueryVariables = {||};
export type AppBarRefectQueryResponse = {|
  +cart: ?$ReadOnlyArray<?{|
    +$fragmentRefs: AppBar_data$ref
  |}>
|};
export type AppBarRefectQuery = {|
  variables: AppBarRefectQueryVariables,
  response: AppBarRefectQueryResponse,
|};
*/

/*
query AppBarRefectQuery {
  cart {
    ...AppBar_data
    id
  }
}

fragment AppBar_data on ProductCart {
  id
  title
  price
  quantity
}
*/

const node /*: ConcreteRequest*/ = {
  kind: 'Request',
  fragment: {
    kind: 'Fragment',
    name: 'AppBarRefectQuery',
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
    name: 'AppBarRefectQuery',
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
    name: 'AppBarRefectQuery',
    id: null,
    text:
      'query AppBarRefectQuery {\n  cart {\n    ...AppBar_data\n    id\n  }\n}\n\nfragment AppBar_data on ProductCart {\n  id\n  title\n  price\n  quantity\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = 'c3711f7fcc2bf88a15f4d71bcfb33edc';
module.exports = node
