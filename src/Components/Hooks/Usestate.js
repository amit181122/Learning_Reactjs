// useState is a React Hook that allows functional components to have state variables. It returns a state 
// variable and a function to update that state variable. The basic syntax is as follows:

import React, { useState } from 'react';

function StateComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default StateComponent;