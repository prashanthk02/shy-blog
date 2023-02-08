import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import "../styles/posts.scss";

export default function PostItem(props) {
  const currentUserState = props.currentUserState
  const isAuth = props.isAuth;
  const id = props.id;
  const date = new Date(props.date.seconds * 1000 + props.date.nanoseconds/1000000);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };

  return (
    <div className="post" key={id}>
      <div className="postDate">
        <h6>{date.toDateString()}</h6>
        {isAuth && props.email === currentUserState.email && (
          <button
            className="postDelete"
            onClick={() => {
              deletePost(id);
            }}
          >
            X
          </button>
        )}
      </div>
      <h6>{props.category}</h6>
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      {props.url && (
        <div className="postImage">
          <img src={props.url} alt={props.title} />
        </div>
      )}
      <div className="postText">{props.postText}</div>
      <div className="author">
        <h3>@{props.author}</h3>
      </div>
    </div>
  );
}
