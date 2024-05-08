import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = { count: 100 };
  render() {
    return (
      <>
        <p>Count : {this.state.count}</p>
        <button
          id="btn"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          ++++
        </button>
      </>
    );
  }
}
export default App;
