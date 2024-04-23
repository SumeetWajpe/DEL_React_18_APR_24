import React, { Component } from "react";

export default class Rating extends Component {
  render() {
    const ratings = [];
    for (let index = 0; index < this.props.rating; index++) {
      <i className="fa-solid fa-star"></i>;
      ratings.push(<i className="fa-solid fa-star"></i>);
    }
    return (
      <span style={{ color: this.props.color || "green" }}>{ratings}</span>
    );
  }
}
