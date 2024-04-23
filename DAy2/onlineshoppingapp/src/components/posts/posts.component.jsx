import React, { Component } from "react";
import axios from "axios";
export default class Posts extends Component {
  state = { posts: [] };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => this.setState({ posts: res.data }));
  }
  render() {
    let contentToBerendered = null;

    if (this.state.posts.length) {
      contentToBerendered = (
        <ul className="list-group">
          {this.state.posts.map(p => (
            <li className="list-group-item">{p.title}</li>
          ))}
        </ul>
      );
    } else {
      contentToBerendered = "Loading..";
    }

    return (
      <div>
        <header>
          <h1>All Posts</h1>
        </header>
        <main>{contentToBerendered}</main>
      </div>
    );
  }
}
