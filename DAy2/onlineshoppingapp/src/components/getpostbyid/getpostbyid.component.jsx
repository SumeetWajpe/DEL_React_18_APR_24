import axios from "axios";
import React, { useEffect, useState } from "react";

const GetPostById = () => {
  const [postId, setPostId] = useState(1);
  const [thePost, setThePost] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );

        if (res.status == 200) {
          setThePost(res.data);
        }
      } catch (error) {
        console.log(error);
        setThePost(null);
        setError(error.message);
      }
    })();
  }, [postId]);
  return (
    <div>
      <label>
        Post Id:{" "}
        <input
          type="text"
          value={postId}
          onInput={e => setPostId(e.target.value.toString())}
        />{" "}
      </label>
      {thePost ? (
        <p>{thePost.title}</p>
      ) : (
        <p className="text-danger">{error}</p>
      )}
    </div>
  );
};

export default GetPostById;
