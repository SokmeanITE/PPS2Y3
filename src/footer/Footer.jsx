import React from "react";
import "./Footer.css"
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const Footer =() =>{
  return(
    <footer class="footer-distributed">

        <div class="footer-left">
          <h3><span>Camputer</span></h3>
            <div className="footer">
                  <Link to={"/"}>Home</Link>
                  |
                  <Link to={"/brand"}> Brand</Link>
                  |
                  <Link to={"/laptop"}>Laptop</Link> 
                  |
                  <Link to={"/desktop"}>Desktop</Link>
                  |
                  <Link to={"/accessories"}>Accessories</Link>
            </div>
          <p class="footer-company-name">© Camputer Official Website</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-phone"></i>
            <p>+855 123 456</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@eduonix.com">support@SokmeanITE007@gmail.com</a></p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About website</span>
            We provide you the best choice of choosing a new computer.</p>
          <div class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </div>
        </div>
    </footer>

  )
}
export default Footer;