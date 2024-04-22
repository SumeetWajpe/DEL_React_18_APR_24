import "./App.css";
import React from "react";
import Message from "../message/message.component";
class App extends React.Component {
  firstMessage = {
    message: "hello",
    from: "Jack",
    to: "Wells",
    imageUrl:
      "https://static1.squarespace.com/static/5e949a92e17d55230cd1d44f/t/61f35a8548933c4ce4cc0daa/1643338381475/HelloLight_Mac.png?format=1500w",
  };
  secondMessage = {
    message: "Hey",
    from: "James",
    to: "Bond",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJ5pmW4GKeR6-q7r_T_bdujk9I5Zf4ByBmPs3ruI2sA&s",
  };
  thirdMessage = {
    message: "Hola",
    from: "Peter",
    to: "Parker",
    imageUrl:
      "https://www.shutterstock.com/image-vector/hola-word-lettering-spanish-hello-260nw-2170222797.jpg",
  };
  render() {
    return (
      <>
        <Message messagedetails={this.firstMessage} />
        <Message messagedetails={this.secondMessage} />
        <Message messagedetails={this.thirdMessage} />
      </>
    );
  }
}
export default App;
