import React from "react";

const AddChannels = () => {
  const onClickedAddChannel = () => {};

  return (
    <div className="d-flex align-items-center justify-content-between px-3">
      Каналы
      <button
        type="button"
        className="btn btn-outline-primary"
        aria-label="Добавить"
        title="Добавить"
        onClick={onClickedAddChannel}
      >
        +
      </button>
    </div>
  );
};

export default AddChannels;
