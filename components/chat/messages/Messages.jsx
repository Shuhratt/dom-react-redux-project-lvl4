import React from "react";
import Message from "../message/Message";
import { useSelector } from "react-redux";

const Messages = () => {
  // Вытаскиваем данные из хранилища. state – все состояние
  const messages = useSelector((state) => state.messagesInfo.messages);

  return (
    <div className="d-flex flex-column p-1">
      <pre>{JSON.stringify(messages, null, 2)}</pre>
      <Message author="Имя" message="сообщение" />
    </div>
  );
};

export default Messages;
