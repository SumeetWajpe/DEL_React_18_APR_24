import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const [thePost, setThePost] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      setThePost(res.data);
    });
  });
  return (
    <div>
      <h2>Post Details for {id}</h2>
      <h4>User Id : {thePost.userId} </h4>
      <h4>Title : {thePost.title} </h4>
      <h4> Body : {thePost.body} </h4>
    </div>
  );
}

export default PostDetails;
