import { useState } from "react";

export const TestComponent = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1);
      setFlag(!flag);
    }, 100);
  };

  console.log("render");

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "red" : "black" }}>{count}</h1>
    </div>
  );
};
