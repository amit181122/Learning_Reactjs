// useContext is a React Hook that allows you to consume values from a React context. It is used to access 
// context values without having to use the traditional context consumer pattern. 
// The basic syntax is as follows:
//create, provider, useContext


import React, { useContext } from 'react';

// Create a context
const MyContext = React.createContext();

// Create a component that provides the context value
function ParentComponent() {
  const contextValue = { message: 'Hello from the context!' };

  return (
    <MyContext.Provider value={contextValue}>
      <ExampleComponent />
    </MyContext.Provider>
  );
}

function ExampleComponent() {
  // Access the context value using useContext
  const contextValue = useContext(MyContext);

  return (
    <div>
      {/* <h1>Example Component</h1> */}
      <p>Message from Context: {contextValue.message}</p>
    </div>
  );
}

export default ParentComponent;
