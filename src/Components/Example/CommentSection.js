import React from "react";
import Comment from "./Comment";

const CommentSection = () => {
  return (
    <div>
      <h2>Comment Section</h2>
      <Comment
        author="John Doe"
        content="This is a great article!"
        replies={[
          { author: "Jane Smith", content: "I agree with you!" },
          { author: "Mike Johnson", content: "Me too! Awesome read!" },
        ]}
      />
      <Comment
        author="Alice Johnson"
        content="Nice post!"
        replies={[
          { author: "John Doe", content: "Thank you, Alice!" },
        ]}
      />
    </div>
  );
};

export default CommentSection;
