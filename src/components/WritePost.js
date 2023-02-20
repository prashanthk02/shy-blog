import React, { useEffect, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

import MyEditor from "./MyEditor";
import "../styles/writePost.scss"

function WritePost({ isAuth }) {
  const [category, setCategory] = useState("Lifestyle");
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const writePost = async () => {
    const date = Timestamp.now();
    const email = auth.currentUser.email;
    await addDoc(postCollectionRef, { category, title, postText, author, email, date, url });
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
            <option value="Lifestyle">Life Style</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Social">Social</option>
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
        {/* <div className="postText">
          <label>Post: </label>
          <textarea
            placeholder="Post..."
            type="text"
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div> */}
        <div className="authorText">
          <label>Author: </label>
          <input
            placeholder="Author..."
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <div className="imgUrl">
          <label>Image URL: </label>
          <input
            placeholder="url..."
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
        
        <div className="editor" >
          <MyEditor setPostText={setPostText} />
        </div>

        <button onClick={writePost}>Submit Post</button>
      </div>
    </div>
  );
}

export default WritePost;