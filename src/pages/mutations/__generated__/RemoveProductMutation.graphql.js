/**
 * @flow
 * @relayHash 637bf61d3f8e2ce52df1ff23e002b06f
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveProductOfCartInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type RemoveProductMutationVariables = {|
  input: RemoveProductOfCartInput
|};
export type RemoveProductMutationResponse = {|
  +removeProductOfCart: ?{|
    +payload: ?$ReadOnlyArray<?{|
      +id: string,
      +title: ?string,
      +price: ?number,
    |}>,
    +clientMutationId: ?string,
  |}
|};
export type RemoveProductMutation = {|
  variables: RemoveProductMutationVariables,
  response: RemoveProductMutationResponse,
|};
*/

/*
mutation RemoveProductMutation(
  $input: RemoveProductOfCartInput!
) {
  removeProductOfCart(input: $input) {
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
        type: 'RemoveProductOfCartInput!',
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'removeProductOfCart',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input'
          }
        ],
        concreteType: 'RemoveProductOfCartPayload',
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
      name: 'RemoveProductMutation',
      type: 'Mutations',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    operation: {
      kind: 'Operation',
      name: 'RemoveProductMutation',
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    params: {
      operationKind: 'mutation',
      name: 'RemoveProductMutation',
      id: null,
      text:
        'mutation RemoveProductMutation(\n  $input: RemoveProductOfCartInput!\n) {\n  removeProductOfCart(input: $input) {\n    payload {\n      id\n      title\n      price\n    }\n    clientMutationId\n  }\n}\n',
      metadata: {}
    }
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '3f20b842b54a57485222620da6ac1ce8';
module.exports = node
