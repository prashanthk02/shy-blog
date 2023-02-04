import React from "react";
import { useParams } from "react-router-dom";
import PostItem from "../components/PostItem";

export default function SinglePost({ isAuth }) {
  const params = useParams();
  const post = localStorage.getItem(params.id);
  const postData = JSON.parse(post);

  console.log(postData.email);

  return (
    <div>
      <PostItem
        key={postData.id}
        date={postData.date}
        email={postData.email}
        id={postData.id}
        category={postData.category}
        title={postData.title}
        postText={postData.postText}
        author={postData.author}
        url={postData.url}
        isAuth={isAuth}
      />
    </div>
  );
}
