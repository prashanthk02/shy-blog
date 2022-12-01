import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("login success");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  return (
    <div>
      <form>
        <label>Email: </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
