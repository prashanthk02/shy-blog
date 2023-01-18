import React from "react";
import AdminLogin from "../components/AdminLogin";

export default function Login({ setIsAuth }) {
  return (
    <AdminLogin setIsAuth={setIsAuth}/>
  );
}