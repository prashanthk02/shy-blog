import React, { useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "../styles/adminLogin.scss";

function AdminLogin({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("isAuth", true);
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuth(true);
        navigate("/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="loginForm">
      <div className="emailBox">
        <label>Email: </label>
        <input type={"email"} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="pswdBox">
        <label>Password: </label>
        <input type={"password"} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="loginBtn" onClick={signIn}>Login</button>
    </div>
  );
}

export default AdminLogin;
