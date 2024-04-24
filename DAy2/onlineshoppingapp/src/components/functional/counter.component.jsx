import { useState } from "react";

const Counter = () => {
  const [counter, setCount] = useState({ count: 0 });

  return (
    <>
      <p>{counter.count}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setCount({ count: counter.count + 1 })}
      >
        ++
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
