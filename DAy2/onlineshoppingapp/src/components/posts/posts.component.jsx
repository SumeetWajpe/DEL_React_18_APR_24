import React, { Component } from "react";
import axios from "axios";
export default class Posts extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => console.log(res.data));
  }
  render() {
    return (
      <div>
        <header>
          <h1>All Posts</h1>
        </header>
      </div>
    );
  }
}
