import axios from "axios";
import React, { useEffect, useState } from "react";

const GetPostById = () => {
  const [postId, setPostId] = useState(1);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );

        if (res.status == 200) {
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [postId]);
  return (
    <div>
      <label>
        Post Id:{" "}
        <input
          type="text"
          onInput={e => setPostId(e.target.value.toString())}
        />{" "}
      </label>
    </div>
  );
};

export default GetPostById;
