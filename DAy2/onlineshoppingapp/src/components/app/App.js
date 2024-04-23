import ListOfProducts from "../listofproducts/listpfproducts.component";

import React, { Component } from "react";
import Posts from "../posts/posts.component";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ListOfProducts /> */}
        <Posts />
      </div>
    );
  }
}

export default App;
