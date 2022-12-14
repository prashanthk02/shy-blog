import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

import "../styles/home.scss";

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };

  return (
    <div className="posts">
      {postList.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="title">
              <h1>{post.title}</h1>
              {isAuth && (
                <div className="delete">
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    X
                  </button>
                </div>
              )}
            </div>
            <div className="postText">{post.postText}</div>
            <div className="author">
              <h3>@{post.author}</h3>
              {/* <h5>{post.date.toDate()}</h5> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
