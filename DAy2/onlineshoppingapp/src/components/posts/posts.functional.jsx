import React, { useEffect } from "react";
import axios from "axios";
const Posts = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => console.log(res.data));
  });
  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>
    </div>
  );
};

export default Posts;
