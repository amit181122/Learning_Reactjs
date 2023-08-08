import React, { useState } from "react";
// import ChildComponent from "./ChildComponent";
import ChildA from "./ChildA";

const ParentComponent = () => {
  const [name, setName] = useState("Amit");

  return (
    <div>
      {/* <h2>Parent Component</h2>
      <p>Name: {name}</p> */}
      <ChildA name={name} />
    </div>
  );
};

export default ParentComponent;
