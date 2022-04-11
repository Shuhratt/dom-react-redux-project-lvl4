import React, { useState } from "react";

import socket from "../../../socket/socket";
import { getLocaleStorage } from "../../../lib/storage/get-local-storage";

const Form = () => {
  const [message, setMessage] = useState("");
  console.log("render Form");

  const username = getLocaleStorage("username");
  const onSubmitPostMessage = (e) => {
    e.preventDefault();

    socket.emit("newMessage", { message, username }, (res) => {
      if (res.status === "ok") {
        setMessage("");
      }
    });
  };

  return (
    <div
      className="d-flex flex-column w-100 p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <form action="" onSubmit={onSubmitPostMessage}>
        <div className="d-flex flex-row align-items-end">
          <input
            name=""
            className="form-control flex-grow-1"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required={true}
          />
          <button type="submit" className="btn btn-primary">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
