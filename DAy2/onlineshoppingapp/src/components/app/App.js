import ListOfProducts from "../listofproducts/listpfproducts.component";

import React, { Component } from "react";
import Posts from "../posts/posts.functional";
import Message from "../functional/message.functional";
import Counter from "../functional/counter.component";
import GetPostById from "../getpostbyid/getpostbyid.component";
import NewProduct from "../newproduct/newproduct.component";
import NewProductRHF from "../newproduct/newproduct.reacthookform";

class App extends Component {
  render() {
    let obj = { message: "Hey" };
    return (
      <div>
        {/* <Posts /> */}
        {/* <Message msg={obj} /> */}
        {/* <Counter /> */}
        {/* <GetPostById /> */}
        {/* <NewProduct /> */}
        <NewProductRHF />

        <ListOfProducts />
      </div>
    );
  }
}

export default App;
