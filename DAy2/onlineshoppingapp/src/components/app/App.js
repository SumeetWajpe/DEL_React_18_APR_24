import ListOfProducts from "../listofproducts/listpfproducts.component";

import React, { Component } from "react";
import Posts from "../posts/posts.functional";
import Message from "../functional/message.functional";
import Counter from "../functional/counter.component";
import GetPostById from "../getpostbyid/getpostbyid.component";
import NewProduct from "../newproduct/newproduct.component";
import NewProductRHF from "../newproduct/newproduct.reacthookform";

// Router
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import PostDetails from "../postdetails/postdetails.component";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <a href="/">Home</a> | <a href="/posts">Posts</a> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ListOfProducts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/postdetails" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
