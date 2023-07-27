// useMemo is a React Hook that memoizes the result of a function and returns the memoized value. 
// It is used to optimize expensive calculations, so that the calculations are only performed when the 
// dependencies change. The basic syntax is as follows:
//memoization


import React, { useMemo, useState } from 'react';

function MemoComponent() {
    const [number, setNumber] = useState(1);
    const [multiplier, setMultiplier] = useState(1);

    const multiplyNumbers = (a, b) => {
        console.log('Performing expensive calculation...');
        return a * b;
      }; 

 const expensiveValue = useMemo(() => {
    return multiplyNumbers(number, multiplier);
  }, [number, multiplier]);
  
  return (
    <div>
      {/* <h1>Example Component</h1> */}
      <p>Number: {number}</p>
      <p>Multiplier: {multiplier}</p>
      <p>Result of Expensive Calculation: {expensiveValue}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>Increment Multiplier</button>
    </div>
  );
}

export default MemoComponent;
