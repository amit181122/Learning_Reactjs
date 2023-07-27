// useRef is a React Hook that returns a mutable ref object. It can be used to persist values across renders 
// without triggering a re-render. Additionally, it allows you to access and modify DOM elements directly. 
// The basic syntax is as follows:

import React, { useRef, useState } from 'react';

function RefComponent() {
  const inputRef = useRef();   //call the useRef
  const [name, setName] = useState("Amit")
  console.log(inputRef)

function Reset(){
    setName("")
    inputRef.current.focus();
}
function HandleInput (){
    inputRef.current.style.color = "red";
    // inputRef.current.value = "Yadav"
    // inputRef.current.focus();
}

  return (
    <div>
      {/* <input ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button> */}
      <input ref={inputRef} type='text' value = {name} onChange={(e)=> setName(e.target.value)}></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={HandleInput}>Update</button>
    </div>
  );
}

export default RefComponent;