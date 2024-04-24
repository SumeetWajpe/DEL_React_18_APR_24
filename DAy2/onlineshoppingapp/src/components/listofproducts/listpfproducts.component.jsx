import React, { Component } from "react";
import Product from "../product/product.component";
import axios from "axios";
export default class ListOfProducts extends Component {
  state = {
    products: [],
  };

  DeleteAProduct(id) {
    console.log("Deleting a product !", id);
    let newProductList = this.state.products.filter(p => p.id !== id);

    this.setState({ products: newProductList });
  }
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
          <Product
            productdetails={p}
            DeleteAProduct={id => this.DeleteAProduct(id)}
          />
        ))}
      </div>
    );
  }
}
