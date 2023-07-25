import React from 'react';
import HelloComponent from './Component/HelloWorld'
import CounterComponent from './Component/Counter';
import SimpleFormComponent from './Component/SimpleForm'

function App() {
  return (
      <div style={{ textAlign: 'center'}}>
         <h1>Task-1:</h1>
        <HelloComponent/>
         <h1>Task-2: </h1>
         <CounterComponent />
         <h1>Task-3: </h1>
         <SimpleFormComponent />
      </div>
  );
}

export default App;
