import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import PostItem from "./PostItem";
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

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <div className="posts">
      {filteredPosts.map((post) => {
        return (
          <PostItem
            key={post.id}
            date={post.date}
            email={post.email}
            category={post.category}
            title={post.title}
            postText={post.postText}
            author={post.author}
            isAuth={isAuth}
          />
        );
      })}
    </div>
  );
}

export default Posts;
