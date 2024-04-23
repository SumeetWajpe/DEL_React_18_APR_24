import React, { Component } from "react";
import Product from "../product/product.component";
import axios from "axios";
export default class ListOfProducts extends Component {
  state = { products: [] };
  async componentDidMount() {
    try {
      let res = await axios.get("http://localhost:3500/products");
      this.setState({ products: res.data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="row">
        {this.state.products.map(p => (
          <Product productdetails={p} />
        ))}
      </div>
    );
  }
}
