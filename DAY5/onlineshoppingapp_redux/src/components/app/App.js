import ListOfProducts from "../listofproducts/listofproducts.component";

import React, { Component } from "react";

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import ProductDetails from "../productdetails/productdetails.component";
// import NewProductWithRHF from "../newproduct/newproduct.reacthookform";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListOfProducts />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          {/* <Route path="/newproduct" element={<NewProductWithRHF />} /> */}

          <Route
            path="*"
            element={
              <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
