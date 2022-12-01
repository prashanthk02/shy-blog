import React from "react";
import { auth, provider } from "../firebase-config";

function Login() {
  return (
    <div>
      <form>
        <label>Email: </label>
        <input type="email" />
        <br />
        <label>Password: </label>
        <input type="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
