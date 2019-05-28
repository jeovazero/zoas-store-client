/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductCartList_data$ref: FragmentReference;
declare export opaque type ProductCartList_data$fragmentType: ProductCartList_data$ref;
export type ProductCartList_data = $ReadOnlyArray<{|
  +id: string,
  +title: ?string,
  +description: ?string,
  +price: ?number,
  +photos: ?$ReadOnlyArray<?{|
    +url: ?string
  |}>,
  +quantity: ?number,
  +$refType: ProductCartList_data$ref,
|}>;
export type ProductCartList_data$data = ProductCartList_data;
export type ProductCartList_data$key = {
  +$data?: ProductCartList_data$data,
  +$fragmentRefs: ProductCartList_data$ref,
};
*/

const node /*: ReaderFragment*/ = {
  kind: 'Fragment',
  name: 'ProductCartList_data',
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
// prettier-ignore
;(node/*: any*/).hash = 'be513257c19b7b5c85e53494a11877b8';
module.exports = node
