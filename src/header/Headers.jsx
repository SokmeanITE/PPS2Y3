import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import $ from 'jquery'; 


const Headers = () =>{

  return (
    <header class="header-area">
    
    <div class="navbar-area">
      <div class="container">
        <nav class="site-navbar">
          
          <a href="#home" class="site-logo">logo</a>
          <ul>
            <Link to="/"><li><a href="#">Home</a></li></Link>
            <Link to="/brand"><li><a href="#">Brand</a></li></Link>
            <Link to="/laptop"><li><a href="#">Desktop</a></li></Link>
            <Link to="/desktop"><li><a href="#">Laptop</a></li></Link>
          </ul>
          <button class="nav-toggler">
            <span></span>
          </button>
        </nav>
      </div>
    </div>
  </header> 
  )
}
export default Headers;