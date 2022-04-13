import React from "react";
const Channel = ({ name, currentChannelId, id }) => {
  const className = ["w-100 rounded-0 text-start nav-link"];

  if (currentChannelId === id) {
    className.push("active");
  }

  return (
    <li className="nav-item w-100">
      <button type="button" className={className.join(" ")}>
        <span className="me-1">#</span>
        {name}
      </button>
    </li>
  );
};

export default Channel;
