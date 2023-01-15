import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import "../styles/home.scss";

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");
  const sortedPosts = postList?.sort((a,b)=> b.date - a.date);

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
      {sortedPosts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h6>{post.category}</h6>
            <div className="title">
              <h1>{post.title}</h1>
              {isAuth && post.email === auth.currentUser.email && (
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
              <h6>{post.date.toDate().toDateString()}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
