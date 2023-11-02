import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
        <Link  to='/Home' class="nav-link" href="#">Home</Link>
      </li>
      <li class="nav-item">
        <Link  to='/Signup' class="nav-link" href="#">Signup</Link>
      </li>
      <li class="nav-item">
        <Link  to='/Login' class="nav-link" href="#">Login</Link>
      </li>
     
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Logout</a>
      </li>
    </ul>
   
  </div>
</nav>
  )
}

export default Navbar
