import React from "react";
import Posts from "../components/Posts";

export default function Home({isAuth, filterValue}) {
  return (
    <Posts isAuth={isAuth} filterValue={filterValue} />
  );
}