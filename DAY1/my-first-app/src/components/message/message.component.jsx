import React, { Component } from "react";
import "./message.component.css";
export default class Message extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <img
            src={this.props.messagedetails.imageUrl}
            alt={this.props.messagedetails.message}
            style={{ height: "150px" }}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.messagedetails.message}</h5>
            <p className="card-text">From :{this.props.messagedetails.from}</p>
            <p className="card-text">To :{this.props.messagedetails.to}</p>
          </div>
        </div>
      </div>
    );
  }
}
