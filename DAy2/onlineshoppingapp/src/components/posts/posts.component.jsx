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
    return (
      <div>
        <header>
          <h1>All Posts</h1>
        </header>
        <main>
          <ul>
            {this.state.posts.map(p => (
              <li>{p.title}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}
