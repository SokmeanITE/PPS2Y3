import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Headers = () =>{
  
  return (
    <nav>
  <ul class="menu">
    <Link to="/"><li class="logo"><a href="#"></a></li></Link>
    <img src="./image/logo.png" height="50" width="50" alt="" />
    <Link to="/"><li class="item"><a href="#">Home</a></li></Link>
    <Link to="/brand"><li class="item"><a href="#">Brand</a></li></Link>
    <Link to="/laptop"><li class="item"><a href="#">Laptop</a></li></Link>
    <Link to="/desktop"><li class="item"><a href="#">Desktop</a></li></Link>
    <Link to="/accessories"><li class="item"><a href="#">Accessories</a></li></Link>
    <Link to="/login"><li class="item button"><a href="#">Log In</a></li></Link>
    <Link to="sigup"><li class="item button secondary"><a href="#">Sign Up</a></li></Link>
    
    <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
  </ul>
</nav>
  )
}
export default Headers;