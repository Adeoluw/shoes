import React from 'react'
import logshoes from "../image/logshoes.png"
import bglogshoes from "../image/loging_bg.png";

const Login = () => {

    function preventlogin(e) {
        e.preventDefault()
    }
  return (
    <div className="login-section">
      <img src={bglogshoes} alt="" className="login-form-bg" />
      <div className="login-image">
        <img src={logshoes} alt="" />
      </div>
      <div className="login-form-section">
        <h2>Welcome Back!</h2>
        <div className="login-form">
          <form action="" onClick={preventlogin}>
            <label for="username">
              <p>User Name</p>
            </label>
            <input
              type="text"
              id="fname"
              name="username"
              placeholder="User name.."
            />

            <label for="password">
              <p>Password</p>
            </label>
            <input
              type="password"
              id="fname"
              name="password"
              placeholder="User name.."
            />
          </form>
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login
