import React from "react";

const Content = ({ children }) => {
  return (
    <div className="col p-0 position-relative  h-100 d-flex flex-column">
      {children}
    </div>
  );
};

export default Content;
