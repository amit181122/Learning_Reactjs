// useEffect is a React Hook used to perform side effects in functional components, such as fetching data, 
// subscribing to events, or manipulating the DOM. It runs after every render by default, but you can control 
// when it should run by providing dependencies (an array) as the second argument. The basic syntax is as follows:

import React, { useEffect, useState } from 'react';

function EffectComponent() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);
  useEffect(() => {
    //console.log("useEffect")  //when our components are created it's called  ComponentDidMount
    // document.title = `You clicked ${count} times`;
    alert("I am clicked");
    console.log("I am clicked again");
  }, [count]); //when we first time page render then its work , conditional, similar to componentDidUpdate  

  return (
    <div>
      {/* <h1>useEffect in reactjs {count}</h1> */}
      {/* its also work on update,,its means if our state is change then this useEffect is also change  */}
      {/* <p>You clicked {count} times</p> */}
      <button onClick={() => setCount(count + 1)}>
        Update Counter {count}
      </button>
      <br />
      <button onClick={() => setCounts(counts + 1)}>
        Update Counters {counts}
      </button>
    </div>
  );
}

export default EffectComponent;
