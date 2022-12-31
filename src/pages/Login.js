import React, { useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div>
      <div>
        <label>Email: </label>
        <input type={"email"} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password: </label>
        <input type={"password"} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={signIn}>Login</button>
      </div>
    </div>
  );
}

export default Login;
