import ListOfProducts from "../listofproducts/listpfproducts.component";

import React, { Component } from "react";
import Posts from "../posts/posts.functional";
import Message from "../functional/message.functional";
import Counter from "../functional/counter.component";

class App extends Component {
  render() {
    let obj = { message: "Hey" };
    return (
      <div>
        <ListOfProducts />
        {/* <Posts /> */}
        {/* <Message msg={obj} /> */}
        {/* <Counter /> */}
      </div>
    );
  }
}

export default App;
