import ListOfProducts from "../listofproducts/listpfproducts.component";

import React, { Component } from "react";
import Posts from "../posts/posts.functional";
import Message from "../functional/message.functional";
import Counter from "../functional/counter.component";
import GetPostById from "../getpostbyid/getpostbyid.component";
import NewProduct from "../newproduct/newproduct.component";
import NewProductRHF from "../newproduct/newproduct.reacthookform";

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListOfProducts />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
