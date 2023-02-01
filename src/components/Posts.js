import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";

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
      {/* create post card in div and later on click render post item */}
      <div className="postCards">
        {filteredPosts.map((post) => {
          return (
            <div className="postCard" key={post.id} onClick={() => console.log(post.id)}>
              <Link to={`/post/${post.id}`}>
                <img src={post.url} alt={post.title} width="300" height="200" />
                <span>{post.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
      {filteredPosts.map((post) => {
        return (
          <PostItem
            key={post.id}
            date={post.date}
            email={post.email}
            id={post.id}
            category={post.category}
            title={post.title}
            postText={post.postText}
            author={post.author}
            url={post.url}
            isAuth={isAuth}
          />
        );
      })}
    </div>
  );
}

export default Posts;
