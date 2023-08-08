import React from "react";

const Reply = ({ author, content }) => {
  return (
    <li>
      <strong>{author}</strong>: {content}
    </li>
  );
};

export default Reply;
