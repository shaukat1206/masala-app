import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login_page">
      <form className="Login_form">
        <h1> MASALA APP </h1>
        <h3>Sign In</h3>

        <div className="Email_Add">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="Password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="">
          <button type="submit" className="submit_button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
