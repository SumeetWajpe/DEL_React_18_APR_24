import ListOfProducts from "../listofproducts/listpfproducts.component";

import React, { Component } from "react";
import Posts from "../posts/posts.component";
import Message from "../functional/message.functional";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ListOfProducts /> */}
        {/* <Posts /> */}
        <Message message="Hey" />
        <Message message="Hello" />
        <Message message="Hola" />
      </div>
    );
  }
}

export default App;
