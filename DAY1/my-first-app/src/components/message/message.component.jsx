import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.messagedetails.imageUrl}
          alt={this.props.messagedetails.message}
          width="200px"
        />
        <h2>{this.props.messagedetails.message}</h2>
        <h4>From : {this.props.messagedetails.from}</h4>
        <h4>To : {this.props.messagedetails.to}</h4>
      </div>
    );
  }
}
