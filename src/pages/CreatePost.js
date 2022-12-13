import React from "react";

function CreatePost() {
  return (
    <div className="cpPage">
      <div className="cpContainer">
        <div className="title">
          <label>Title: </label>
          <input placeholder="Title..." />
        </div>
        <div className="post">
          <label>Post: </label>
          <textarea placeholder="Post..." />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
