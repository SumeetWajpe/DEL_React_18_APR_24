import React from "react";

class BasicComponent extends React.Component {
  render() {
    return <h2>{this.props.data}</h2>;
  }
}
export default BasicComponent;
