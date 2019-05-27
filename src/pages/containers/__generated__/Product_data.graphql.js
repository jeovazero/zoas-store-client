/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Product_data$ref: FragmentReference;
declare export opaque type Product_data$fragmentType: Product_data$ref;
export type Product_data = {|
  +id: string,
  +title: string,
  +description: string,
  +price: number,
  +photos: ?$ReadOnlyArray<?{|
    +url: string
  |}>,
  +avaliability: boolean,
  +$refType: Product_data$ref,
|};
export type Product_data$data = Product_data;
export type Product_data$key = {
  +$data?: Product_data$data,
  +$fragmentRefs: Product_data$ref,
};
*/

const node /*: ReaderFragment*/ = {
  kind: 'Fragment',
  name: 'Product_data',
  type: 'Product',
  metadata: null,
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
      concreteType: 'Photo',
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
      name: 'avaliability',
      args: null,
      storageKey: null
    }
  ]
}
// prettier-ignore
;(node/*: any*/).hash = '5a842c756a823bf3aab7c83d82552818';
module.exports = node
