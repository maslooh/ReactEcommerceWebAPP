import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import cartCRUD from '../content/cart/dataModel'
let Header = () => {
  const [len, setLen] = useState(0)
  useEffect(() => {
    cartCRUD.getAllItems().then(res=>res.json()).then(data=>setLen(data.length))
  }, [])
  
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
          <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Products</a>
        </li>
      </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <Link class="nav-link position-relative me-3 mt-2" to="/cart">
              <i class="fa-solid h4 text-white fa-cart-shopping"></i>
              {len>0 &&
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {len}
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