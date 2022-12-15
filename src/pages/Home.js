import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function Home() {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(postList)
    };

    getPosts();
  }, []);

  return (<div className="homePage">
    {postList.map((post) =>{
      return (
        <div className="post">{post.title}</div>
      )
    })}
  </div>);
}

export default Home;
