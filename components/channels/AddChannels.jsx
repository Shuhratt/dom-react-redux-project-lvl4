import React from "react";
import { FaPlus } from "react-icons/fa";

const AddChannels = () => {
  const onClickedAddChannel = () => {};
  const title = "Добавить новый канал";
  return (
    <div className="d-flex align-items-center justify-content-between px-3">
      Каналы
      <button
        type="button"
        className="btn btn-outline-primary p-2"
        aria-label={title}
        title={title}
        onClick={onClickedAddChannel}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddChannels;
