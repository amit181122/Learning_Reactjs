import React from "react";
import Reply from "./Reply";

const Comment = ({ author, content, replies }) => {
  return (
    <div>
      <strong>{author}</strong>: {content}
      <ul>
        {replies.map((reply, index) => (
          <Reply key={index} author={reply.author} content={reply.content} />
        ))}
      </ul>
    </div>
  );
};

export default Comment;
