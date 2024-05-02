import React, { useState, useContext } from "react";

const CounterContext = React.createContext(0);
export function GrandParent() {
  const [count] = useState(100);
  return (
    <CounterContext.Provider value={count}>
      <p>Grand Parent</p>
      <Parent />
    </CounterContext.Provider>
  );
}

export function Parent() {
  return (
    <div>
      <p>Parent</p>
      <Child />
      <AnotherChild />
    </div>
  );
}

export function Child() {
  const ctx = useContext(CounterContext); // Consumer
  return (
    <div>
      Child
      <p>Count : {ctx}</p>
    </div>
  );
}

export function AnotherChild() {
  const ctx = useContext(CounterContext); // Consumer
  return (
    <div>
      Another Child
      <p>Count : {ctx}</p>
    </div>
  );
}
