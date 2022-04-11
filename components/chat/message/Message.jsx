import React from "react";

const Message = ({ author, message }) => {
  return (
    <p className="m-0 p-1">
      <b>{author}:</b> {message}
    </p>
  );
};

export default Message;
