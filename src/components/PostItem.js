import React from "react";
import "../styles/postItem.scss";

export default function PostItem(props) {
  const id = props.id;
  const date = new Date(
    props.date.seconds * 1000 + props.date.nanoseconds / 1000000
  );

  return (
    <div className="post" key={id}>
      <div className="postDate">
        <h6>{date.toDateString()}</h6>
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
