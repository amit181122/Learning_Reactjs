import React, { useState } from "react";

const ChildComponent = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <p>Name from Parent: {name}</p>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
};

export default ChildComponent;
