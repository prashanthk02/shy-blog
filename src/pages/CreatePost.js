import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  return (
    <div className="cpPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="title">
          <label>Title: </label>
          <input
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="post">
          <label>Post: </label>
          <textarea
            placeholder="Post..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
