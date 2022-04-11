import React from "react";

const MainContainer = ({ header, children }) => {
  return (
    <div className="d-flex flex-column h-100">
      {header}
      <main className="container my-4 overflow-hidden rounded shadow flex-grow-1 ">
        <div className="row bg-white flex-md-row h-100">{children}</div>
      </main>
    </div>
  );
};

export default MainContainer;
