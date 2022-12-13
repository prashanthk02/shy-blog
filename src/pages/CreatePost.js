import React from "react";

function CreatePost() {
  return (
    <div className="cpPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="title">
          <label>Title: </label>
          <input placeholder="Title..." />
        </div>
        <div className="post">
          <label>Post: </label>
          <textarea placeholder="Post..." />
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
