import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { Link } from "react-router-dom";

import "../styles/posts.scss";

function Posts({ isAuth, filterValue }) {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");
  const sortedPosts = postList?.sort((a, b) => b.date - a.date);
  const filteredPosts = sortedPosts.filter((post) => {
    if (filterValue === "A") {
      return post.category === "A";
    } else if (filterValue === "B") {
      return post.category === "B";
    } else if (filterValue === "C") {
      return post.category === "C";
    } else {
      return post;
    }
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <div className="posts">
      {/* create post card in div and later on click render post item */}
      <div className="postCards">
        {filteredPosts.map((post) => {
          return (
            <div
              className="postCard"
              key={post.id}
              onClick={() =>
                localStorage.setItem(post.id, JSON.stringify(post))
              }
            >
              {isAuth && post.email === auth.currentUser.email && (
                <button
                  className="postDelete"
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  X
                </button>
              )}
              <Link to={`/post/${post.id}`}>
                <img src={post.url} alt={post.title} width="300" height="200" />
                <span>{post.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
