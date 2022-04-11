import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const onSubmitPostMessage = (e) => {
    // alert(`Отправляем ${text}`);
  };

  return (
    <div className="position-absolute  bottom-0 start-0 d-flex flex-column w-100 p-3">
      <form action="" onSubmit={onSubmitPostMessage}>
        <div className="d-flex flex-row align-items-end">
          <input
            name=""
            className="form-control flex-grow-1"
            onChange={(e) => setText(e.target.value)}
            value={text}
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
