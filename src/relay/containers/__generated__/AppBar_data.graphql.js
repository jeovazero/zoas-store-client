/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AppBar_data$ref: FragmentReference;
declare export opaque type AppBar_data$fragmentType: AppBar_data$ref;
export type AppBar_data = $ReadOnlyArray<{|
  +id: string,
  +title: ?string,
  +price: ?number,
  +quantity: ?number,
  +$refType: AppBar_data$ref,
|}>;
export type AppBar_data$data = AppBar_data;
export type AppBar_data$key = {
  +$data?: AppBar_data$data,
  +$fragmentRefs: AppBar_data$ref,
};
*/

const node /*: ReaderFragment*/ = {
  kind: 'Fragment',
  name: 'AppBar_data',
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
// prettier-ignore
;(node/*: any*/).hash = '1f01445c19a8b54c7fd9651c0c13135f';
module.exports = node
