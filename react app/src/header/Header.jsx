import { Link,NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import { BrowserRouter } from 'react-router-dom';
import { Input } from 'antd';
import React, { createElement } from 'react';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import { Autocomplete } from '../search/Autocomplete';
import { ProductItem } from '../search/SearchItem';
import algoliasearch from 'algoliasearch';


const appId = 'XOWB64MIEO';
const apiKey = '6a650d7dfb5af8c9393cfffbfcf53842';
const searchClient = algoliasearch(appId, apiKey);

let Header = (props) => {
  return (
    <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="/"><i class="fa-brands h3 fa-amazon"></i></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <NavLink className={"nav-link"} activeClassName="active" to="/">Home</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className={"nav-link"} activeClassName="active" to="/addCategory">Add Category</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className={"nav-link"} activeClassName="active" to="/addProduct">Add Product</NavLink>
    </li>
  </ul>
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
        <Link class="nav-link position-relative me-3 mt-2" to="/cart">
          <i class="fa-solid h4 text-white fa-cart-shopping"></i>
          {props.cartItems.length>0 &&
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {
                  props.cartItems.reduce((acc,obj) => {return acc+obj.quantity},0)
                }
                  <span class="visually-hidden">unread messages</span>
                </span>
          }
        </Link>
</div>
</div>
</nav>
)
}
  
    


export default Header