import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleDecrement} style={{ marginRight: '10px' }}>Decrement</button>
      <button onClick={handleIncrement} style={{ marginLeft: '10px' }}>Increment</button>
    </div>
  );
};

export default CounterComponent;
