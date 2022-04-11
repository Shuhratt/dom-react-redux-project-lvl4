import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light  h-100">
      <div className="d-flex flex-column">{children}</div>
    </div>
  );
};

export default Sidebar;
