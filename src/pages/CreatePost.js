import React from "react";
import WritePost from "../components/WritePost";

export default function CreatePost({ isAuth }) {
  return (
    <WritePost isAuth={isAuth} />
  );
}