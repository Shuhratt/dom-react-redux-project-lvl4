import React, { useEffect, useRef } from "react";
import Message from "../message/Message";
import { useSelector } from "react-redux";

const Messages = () => {
  const spanRef = useRef(null);
  let messages = useSelector((state) => state.messagesInfo.messages);

  useEffect(() => {
    spanRef.current.scrollIntoView({
      top: false,
    });
  }, [messages.length]);

  return (
    <div className=" p-1 overflow-auto flex-grow-1">
      <div className="d-flex flex-column h-100">
        {messages.map(({ message, username, id }) => (
          <Message author={username} message={message} key={id} />
        ))}
      </div>
      <div ref={spanRef} style={{ opacity: 0, fontSize: "0px" }}>
        &nbsp;
      </div>
    </div>
  );
};

export default Messages;
