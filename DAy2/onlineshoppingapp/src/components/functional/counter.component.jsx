import { useState } from "react";

const Counter = () => {
  const [counter, setCount] = useState({ count: 0 });
  const [age, setAge] = useState(18);

  return (
    <>
      <p>Count : {counter.count}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setCount({ count: counter.count + 1 })}
      >
        Count ++
      </button>
      <hr />
      <p>Age : {age}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setAge(age + 10)}
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
