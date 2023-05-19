import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
 

const Headers = () =>{

  return (
    <header class="header-area">
    
      <div class="container-navbar">
        <nav class="site-navbar">
          
          <a href="/" class="site-logo" > <img src="https://cdn.shopify.com/s/files/1/0316/0804/5705/files/Front_page_banner_image.png?v=1669733107" alt=""/> </a>
          <ul>
            <Link to="/"><li><a href="#">Home</a></li></Link>
            <Link to="/brand"><li><a href="#">Brand</a></li></Link>
            <Link to="/laptop"><li><a href="#">Desktop</a></li></Link>
            <Link to="/desktop"><li><a href="#">Laptop</a></li></Link>
            <Link to="/login"><li><a href="#">LogIn</a></li></Link>

          </ul>
          <button class="nav-toggler">
            <span></span>
          </button>
        </nav>
      </div>
  </header> 
  )
}
export default Headers;