import { Link,NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import algoliasearch from 'algoliasearch/lite';
import Search from '../search/Search'
import { BrowserRouter } from 'react-router-dom';
import { Input } from 'antd';
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
      <NavLink className={"nav-link"} activeClassName="active" to="/">Add Category</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className={"nav-link"} activeClassName="active" to="/">Add Product</NavLink>
    </li>
  </ul>
        <Search/>
        <Link class="nav-link position-relative me-3 mt-2" to="/cart">
          <i class="fa-solid h4 text-white fa-cart-shopping"></i>
          {props.cartItems>0 &&
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {props.cartItems}
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