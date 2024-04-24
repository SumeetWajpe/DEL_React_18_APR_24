import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState({ count: 0, age: 18 });
  //const [age, setAge] = useState(18); // destructuring in es6

  return (
    <>
      <p>Count : {state.count}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setState({ ...state, count: state.count + 1 })}
      >
        Count ++
      </button>
      <hr />
      <p>Age : {state.age}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setState({ ...state, age: state.age + 10 })}
      >
        Age ++
      </button>
    </>
  );
};
export default Counter;
// // function declaration
// function Add(x, y) {
//   return x + y;
// }
// // function as an expression
// var Add = function (x, y) {
//   return x + y;
// };

// // using arrow function
// var Add = (x, y) => x + y;
