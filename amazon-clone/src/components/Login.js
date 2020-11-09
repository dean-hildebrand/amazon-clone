import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    // firebase login user code
  }

  const register = e => {
    e.preventDefault();
    // firebase register user code
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
        </form>
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and out
          Interest-Base Ads Notice. Thank you
        </p>

        <button className="login__registerButton" onClick={register}>
          Create an Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
