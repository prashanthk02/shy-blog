import React from "react";
import "../styles/postItem.scss";

export default function PostItem(props) {
  const id = props.id;
  const date = new Date(
    props.date.seconds * 1000 + props.date.nanoseconds / 1000000
  );

  return (
    <div className="post" key={id}>
      <div className="postIntro">
        <h1 className="postTitle">{props.title}</h1>
        <h6 className="postDate">{date.toDateString()}</h6>
        <h6 className="postCategory">{props.category}</h6>
      </div>
      <article className="postText">{props.postText}</article>
        {props.url && (
          <img className="postImage" src={props.url} alt={props.title} />
        )}
      <h3 className="postAuthor">@{props.author}</h3>
    </div>
  );
}
