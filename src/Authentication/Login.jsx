import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"


const Login = () =>{
    const passwordInput = document.querySelector("#password");
const togglePasswordBtn = document.querySelector("#toggle-password");

togglePasswordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.textContent = "Show";
  }
});
    return(
        <form className="login-form">
            <div className="social-login">
                <button className="facebook-btn">Login with Facebook</button>
                <button className="google-btn">Login with google</button>
            </div>
            <div className="manual-login">
                <span>Login With Email</span><br></br>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" id="password" />
                <button type="button" id="toggle-password">Show</button>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}
export default Login;