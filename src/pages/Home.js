import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

import "../styles/Home.scss";

function Home() {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(postList);
    };

    getPosts();
  }, []);

  return (
    <div className="posts">
      {postList.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="postText">{post.postText}</div>
            <div className="author">
              <h3>@{post.author}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
