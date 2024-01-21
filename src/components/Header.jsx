import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrapper">
          <div className="header__logo"></div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
