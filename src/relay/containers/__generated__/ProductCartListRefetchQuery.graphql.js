/**
 * @flow
 * @relayHash 28c4346a35ac9913ada29ce3cc68f693
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductCartList_data$ref = any;
export type ProductCartListRefetchQueryVariables = {||};
export type ProductCartListRefetchQueryResponse = {|
  +cart: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ProductCartList_data$ref
  |}>
|};
export type ProductCartListRefetchQuery = {|
  variables: ProductCartListRefetchQueryVariables,
  response: ProductCartListRefetchQueryResponse,
|};
*/

/*
query ProductCartListRefetchQuery {
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
    name: 'ProductCartListRefetchQuery',
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
    name: 'ProductCartListRefetchQuery',
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
    name: 'ProductCartListRefetchQuery',
    id: null,
    text:
      'query ProductCartListRefetchQuery {\n  cart {\n    ...ProductCartList_data\n    id\n  }\n}\n\nfragment ProductCartList_data on ProductCart {\n  id\n  title\n  description\n  price\n  photos {\n    url\n  }\n  quantity\n}\n',
    metadata: {}
  }
}
// prettier-ignore
;(node/*: any*/).hash = '24ec911d4a9266f4e65449fc3ba7b949';
module.exports = node
