import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data));
  }, []);
  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>
      <main>
        <ul className="list-group">
          {posts.map(p => (
            <li key={p.id} className="list-group-item">
              <Link to="/postdetails">{p.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Posts;
