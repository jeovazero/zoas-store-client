/**
 * @flow
 * @relayHash 4885363b1198af98a4207c5f5d3281e8
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PayCartInput = {|
  fullName: string,
  address: AddressInput,
  creditCard: CreditCardInput,
  clientMutationId?: ?string,
|};
export type AddressInput = {|
  city: string,
  country: string,
  zipcode: string,
  street: string,
  number: string,
  district: string,
|};
export type CreditCardInput = {|
  cardNumber: string,
  expirationDate: string,
  cvv: string,
|};
export type PayCartMutationVariables = {|
  input: PayCartInput
|};
export type PayCartMutationResponse = {|
  +payCart: ?{|
    +payload: ?{|
      +customer: ?string,
      +totalPaid: ?number,
    |},
    +clientMutationId: ?string,
  |}
|};
export type PayCartMutation = {|
  variables: PayCartMutationVariables,
  response: PayCartMutationResponse,
|};
*/

/*
mutation PayCartMutation(
  $input: PayCartInput!
) {
  payCart(input: $input) {
    payload {
      customer
      totalPaid
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
        type: 'PayCartInput!',
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'payCart',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input'
          }
        ],
        concreteType: 'PayCartPayload',
        plural: false,
        selections: [
          {
            kind: 'LinkedField',
            alias: null,
            name: 'payload',
            storageKey: null,
            args: null,
            concreteType: 'PurchaseResult',
            plural: false,
            selections: [
              {
                kind: 'ScalarField',
                alias: null,
                name: 'customer',
                args: null,
                storageKey: null
              },
              {
                kind: 'ScalarField',
                alias: null,
                name: 'totalPaid',
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
      name: 'PayCartMutation',
      type: 'Mutations',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    operation: {
      kind: 'Operation',
      name: 'PayCartMutation',
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    params: {
      operationKind: 'mutation',
      name: 'PayCartMutation',
      id: null,
      text:
        'mutation PayCartMutation(\n  $input: PayCartInput!\n) {\n  payCart(input: $input) {\n    payload {\n      customer\n      totalPaid\n    }\n    clientMutationId\n  }\n}\n',
      metadata: {}
    }
  }
})()
// prettier-ignore
;(node/*: any*/).hash = 'e1ffcf1d7ca40fc42c20b69eee49c55b';
module.exports = node
