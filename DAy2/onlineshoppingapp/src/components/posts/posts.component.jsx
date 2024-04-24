// import React, { Component } from "react";
// import axios from "axios";
// export default class Posts extends Component {
//   state = { posts: [], error: "" };
//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then(res => {
//         if (res.status == 200) {
//           this.setState({ posts: res.data, error: "" });
//         } else {
//           throw new Error("Something went wrong !");
//         }
//       })
//       .catch(err => this.setState({ posts: [], error: err.message }));
//   }
//   render() {
//     let contentToBerendered = null;

//     if (this.state.posts.length) {
//       contentToBerendered = (
//         <ul className="list-group">
//           {this.state.posts.map(p => (
//             <li className="list-group-item">{p.title}</li>
//           ))}
//         </ul>
//       );
//     } else if (this.state.error) {
//       contentToBerendered = <p className="text-danger">{this.state.error}</p>;
//     } else {
//       contentToBerendered = "Loading..";
//     }

//     return (
//       <div>
//         <header>
//           <h1>All Posts</h1>
//         </header>
//         <main>{contentToBerendered}</main>
//       </div>
//     );
//   }
// }
