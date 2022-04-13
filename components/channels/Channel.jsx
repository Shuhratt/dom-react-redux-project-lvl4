import React from "react";
import { IconContext } from "react-icons";
import { FaPenSquare, FaTrash } from "react-icons/fa";

function Icon({ isActive, children, onClick, title }) {
  return (
    <IconContext.Provider value={{ color: isActive ? "#fff" : "#ccc" }}>
      <button
        className="d-flex align-items-center justify-content-center mx-1 btn p-0"
        aria-label={title}
        title={title}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </IconContext.Provider>
  );
}

const Channel = ({ name, activeID, id, setActiveID }) => {
  const className = ["w-100 rounded-0 text-start nav-link"];

  const isActive = id === activeID;
  if (isActive) {
    className.push("active");
  } else {
    className.filter((el) => el === "active");
  }

  const onCurrentClicked = (id) => (e) => {
    setActiveID(id);
  };

  return (
    <li className="nav-item w-100 position-relative">
      <button
        type="button"
        className={className.join(" ")}
        onClick={onCurrentClicked(id)}
      >
        <span className="me-1">#</span>
        {name}
      </button>
      <div className="d-flex position-absolute end-0 top-0 align-items-center pe-1 bottom-0">
        <Icon isActive={isActive} onClick={() => {}} title={"Редактировать"}>
          <FaPenSquare />
        </Icon>
        <Icon isActive={isActive} onClick={() => {}} title={"Удалить"}>
          <FaTrash />
        </Icon>
      </div>
    </li>
  );
};

export default Channel;
