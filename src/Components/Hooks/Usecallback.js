// useCallback is a React Hook that memoizes a callback function and only changes it if its dependencies change. 
// This is useful for optimizing performance, especially when passing callbacks to child components that rely on 
// reference equality to prevent unnecessary renders. The basic syntax is as follows:

import React, { useState, useCallback } from 'react';

function CallbackComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default CallbackComponent;
