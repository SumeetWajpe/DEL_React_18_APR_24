import React, { useState, useContext } from "react";

const CounterContext = React.createContext({ count: 0, changeCount: () => {} });
export function GrandParent() {
  const [count, setCount] = useState({ count: 100 });
  return (
    <CounterContext.Provider
      value={{
        count,
        changeCount: () => {
          setCount({ count: count.count + 1 });
        },
      }}
    >
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
      <p>Count : {ctx.count.count}</p>
      <button onClick={() => ctx.changeCount()}>++</button>
    </div>
  );
}

export function AnotherChild() {
  const ctx = useContext(CounterContext); // Consumer
  return (
    <div>
      Another Child
      <p>Count : {ctx.count.count}</p>
    </div>
  );
}
