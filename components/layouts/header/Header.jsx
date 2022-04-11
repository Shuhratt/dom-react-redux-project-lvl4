import React from "react";

const Header = () => {
  return (
    <header className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a href="#">Logo</a>
        <div className="">
          <button type="button" className="btn btn-secondary">
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
