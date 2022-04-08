import {Link } from 'react-router-dom'
let Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><i class="fa-brands h3 fa-amazon"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Products</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <a class="nav-link" href="#"><i class="fa-solid h4 text-black fa-cart-shopping"></i></a>
    </div>
  </div>
</nav>
    )
}

export default Header