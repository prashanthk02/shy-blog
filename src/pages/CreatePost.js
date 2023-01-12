import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

import "../styles/createPost.scss"

function CreatePost({ isAuth }) {
  const [category, setCategory] = useState("A");
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [author, setAuthor] = useState("");

  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    let date = new Date();
    await addDoc(postCollectionRef, { category, title, postText, author, date });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="cpPage">
      <h1>Create a Post</h1>
      <div className="cpContainer">

       <div className="categoryText">
          <label>Category: </label>
          <select onChange={(e) => {
              setCategory(e.target.value);
              }
            }
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div className="titleText">
          <label>Title: </label>
          <input
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="postText">
          <label>Post: </label>
          <textarea
            placeholder="Post..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <div className="authorText">
          <label>Author: </label>
          <input
            placeholder="Author..."
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
