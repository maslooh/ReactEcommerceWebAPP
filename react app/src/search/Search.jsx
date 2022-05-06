import React, { createElement } from 'react';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';
import { Autocomplete } from './Autocomplete';
import { ProductItem } from './SearchItem';
import { BrowserRouter } from 'react-router-dom';


const appId = 'XOWB64MIEO';
const apiKey = '6a650d7dfb5af8c9393cfffbfcf53842';
// const appId = 'latency';
// const apiKey = '6be0576ff61c053d5f9a3225e2a90f76';
const searchClient = algoliasearch(appId, apiKey);

const Search = (props) => {
    return (
        <Autocomplete
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: 'Products',
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'Products',
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                    return (
                        <ProductItem hit={item} components={components} />
                    )
              },
            },
          },
        ]}
      />
    )
}

export default Search