import React from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  return <div>Post Details for {id}</div>;
}

export default PostDetails;
