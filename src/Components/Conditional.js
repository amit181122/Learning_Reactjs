import React, { useState } from "react";
import "./Conditional.css";

const ConditionalButton = () => {
  const [image, setImage] = useState(false);

  const handleImage = () => {
    setImage(!image);
  };

  return (

    <div className="image-wrapper">
      {image && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnkQyWJX7ZGwzCJhE03GtcOVlC_U6b1tZ_A&usqp=CAU"
          alt="Image"
          className="image"
        />
      )}
      <button onClick={handleImage} className={`toggle-button ${image ? 'red' : 'green'}`}>
        {image ? 'Hide Image' : 'Show Image'}
      </button>
    </div>
  );
};

export default ConditionalButton;
