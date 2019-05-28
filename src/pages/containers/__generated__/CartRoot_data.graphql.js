/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CartRoot_data$ref: FragmentReference;
declare export opaque type CartRoot_data$fragmentType: CartRoot_data$ref;
export type CartRoot_data = $ReadOnlyArray<{|
  +id: string,
  +price: ?number,
  +quantity: ?number,
  +$refType: CartRoot_data$ref,
|}>;
export type CartRoot_data$data = CartRoot_data;
export type CartRoot_data$key = {
  +$data?: CartRoot_data$data,
  +$fragmentRefs: CartRoot_data$ref,
};
*/

const node /*: ReaderFragment*/ = {
  kind: 'Fragment',
  name: 'CartRoot_data',
  type: 'ProductCart',
  metadata: {
    plural: true
  },
  argumentDefinitions: [],
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
// prettier-ignore
;(node/*: any*/).hash = '6d145f0e0ea313f913d8673166de4d5d';
module.exports = node
