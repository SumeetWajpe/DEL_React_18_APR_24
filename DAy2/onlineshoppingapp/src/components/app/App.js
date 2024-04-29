import ListOfProducts from "../listofproducts/listpfproducts.component";

import React, { Component } from "react";
import Posts from "../posts/posts.functional";

// Router
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import PostDetails from "../postdetails/postdetails.component";
import ProductDetails from "../productdetails/productdetails.component";
import { ToastContainer } from "react-toastify";
import NewProductWithRHF from "../newproduct/newproduct.reacthookform";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <a href="/">Home</a> | <a href="/posts">Posts</a> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ListOfProducts />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/newproduct" element={<NewProductWithRHF />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/postdetails/:id" element={<PostDetails />} />
          <Route
            path="*"
            element={
              <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" />
            }
          />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
        <ToastContainer />
      </BrowserRouter>
    );
  }
}

export default App;
