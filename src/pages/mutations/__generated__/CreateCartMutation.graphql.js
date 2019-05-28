/**
 * @flow
 * @relayHash 25198347543211994d13616858d30505
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCartInput = {|
  clientMutationId?: ?string
|};
export type CreateCartMutationVariables = {|
  input: CreateCartInput
|};
export type CreateCartMutationResponse = {|
  +createCart: ?{|
    +confirmation: ?string
  |}
|};
export type CreateCartMutation = {|
  variables: CreateCartMutationVariables,
  response: CreateCartMutationResponse,
|};
*/

/*
mutation CreateCartMutation(
  $input: CreateCartInput!
) {
  createCart(input: $input) {
    confirmation
  }
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'input',
        type: 'CreateCartInput!',
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'createCart',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input'
          }
        ],
        concreteType: 'CreateCartPayload',
        plural: false,
        selections: [
          {
            kind: 'ScalarField',
            alias: null,
            name: 'confirmation',
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
      name: 'CreateCartMutation',
      type: 'Mutations',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    operation: {
      kind: 'Operation',
      name: 'CreateCartMutation',
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    params: {
      operationKind: 'mutation',
      name: 'CreateCartMutation',
      id: null,
      text:
        'mutation CreateCartMutation(\n  $input: CreateCartInput!\n) {\n  createCart(input: $input) {\n    confirmation\n  }\n}\n',
      metadata: {}
    }
  }
})()
// prettier-ignore
;(node/*: any*/).hash = 'ffbc8e2e95c5d895b42e9828d37e30ab';
module.exports = node
