import DOMPurify from "dompurify";
import React from "react";
import "../styles/postItem.scss";

export default function PostItem(props) {
  const id = props.id;
  const date = new Date(
    props.date.seconds * 1000 + props.date.nanoseconds / 1000000
  );
  const postHtml = props.postText;

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  return (
    <div className="post" key={id}>
      <div className="postIntro">
        <h1 className="postTitle">{props.title}</h1>
        <h5 className="postDate">{date.toDateString()}</h5>
        <h5 className="postCategory">{props.category}</h5>
      </div>
      {props.url && (
        <img className="postImage" src={props.url} alt={props.title} />
      )}
      <article
        className="postText"
        dangerouslySetInnerHTML={createMarkup(postHtml)}
      ></article>
      <h3 className="postAuthor">@{props.author}</h3>
    </div>
  );
}
