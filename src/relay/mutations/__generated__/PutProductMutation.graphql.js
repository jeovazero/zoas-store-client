/**
 * @flow
 * @relayHash 024e19866f84e401687ec67db3df4d00
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PutProductToCartInput = {|
  id: string,
  quantity: number,
  clientMutationId?: ?string,
|};
export type PutProductMutationVariables = {|
  input: PutProductToCartInput
|};
export type PutProductMutationResponse = {|
  +putProductToCart: ?{|
    +payload: ?$ReadOnlyArray<?{|
      +id: string,
      +title: ?string,
      +price: ?number,
    |}>,
    +clientMutationId: ?string,
  |}
|};
export type PutProductMutation = {|
  variables: PutProductMutationVariables,
  response: PutProductMutationResponse,
|};
*/

/*
mutation PutProductMutation(
  $input: PutProductToCartInput!
) {
  putProductToCart(input: $input) {
    payload {
      id
      title
      price
    }
    clientMutationId
  }
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'input',
        type: 'PutProductToCartInput!',
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'putProductToCart',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input'
          }
        ],
        concreteType: 'PutProductToCartPayload',
        plural: false,
        selections: [
          {
            kind: 'LinkedField',
            alias: null,
            name: 'payload',
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
              }
            ]
          },
          {
            kind: 'ScalarField',
            alias: null,
            name: 'clientMutationId',
            args: null,
            storageKey: null
          }
        ]
      }
    ]
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'PutProductMutation',
      type: 'Mutations',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    operation: {
      kind: 'Operation',
      name: 'PutProductMutation',
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    params: {
      operationKind: 'mutation',
      name: 'PutProductMutation',
      id: null,
      text:
        'mutation PutProductMutation(\n  $input: PutProductToCartInput!\n) {\n  putProductToCart(input: $input) {\n    payload {\n      id\n      title\n      price\n    }\n    clientMutationId\n  }\n}\n',
      metadata: {}
    }
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '2aa25dd39eed40d0275e8586394933b8';
module.exports = node
