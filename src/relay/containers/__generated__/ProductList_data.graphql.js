/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductList_data$ref: FragmentReference;
declare export opaque type ProductList_data$fragmentType: ProductList_data$ref;
export type ProductList_data = {|
  +edges: $ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +title: string,
      +description: string,
      +price: number,
      +photos: ?$ReadOnlyArray<?{|
        +url: string
      |}>,
      +avaliability: boolean,
    |}
  |}>,
  +$refType: ProductList_data$ref,
|};
export type ProductList_data$data = ProductList_data;
export type ProductList_data$key = {
  +$data?: ProductList_data$data,
  +$fragmentRefs: ProductList_data$ref,
};
*/

const node /*: ReaderFragment*/ = {
  kind: 'Fragment',
  name: 'ProductList_data',
  type: 'ProductConnection',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'LinkedField',
      alias: null,
      name: 'edges',
      storageKey: null,
      args: null,
      concreteType: 'ProductEdge',
      plural: true,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: null,
          concreteType: 'Product',
          plural: false,
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
      ]
    }
  ]
}
// prettier-ignore
;(node/*: any*/).hash = '9502a8a9e1db77c4f77746bdced31921';
module.exports = node
