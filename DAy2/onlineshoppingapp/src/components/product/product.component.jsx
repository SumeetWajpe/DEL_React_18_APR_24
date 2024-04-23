import React, { Component } from "react";
import Rating from "../rating/rating.component";

export default class Product extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.productdetails.imageUrl}
            alt={this.props.productdetails.name}
            style={{ height: "150px" }}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.productdetails.name}</h5>
            <p className="card-text">₹. {this.props.productdetails.price}</p>
            <p className="card-text">
              <Rating
                rating={this.props.productdetails.rating}
                color="orange"
              />
            </p>
            <button className="btn btn-primary">
              {" "}
              {this.props.productdetails.likes}{" "}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
