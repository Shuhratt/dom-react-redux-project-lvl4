import React from "react";
import { useAuth } from "../context/auth";

const Main = () => {
  const { isAuthed } = useAuth();
  return (
    <div className="d-flex flex-column h-100">
      <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a href="#">Logo</a>
          <div className="">
            <button type="button" className="btn btn-secondary">
              Выйти
            </button>
          </div>
        </div>
      </nav>
      <div className="container my-4 overflow-hidden rounded shadow flex-grow-1">
        <div className="row bg-white flex-md-row h-100">
          <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
            Cлева
            {isAuthed && "Вошёл"}
          </div>
          <div className="col p-0">Контент</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
