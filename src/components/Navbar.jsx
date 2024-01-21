import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <NavLink className="nav__link">Raids</NavLink>
        <NavLink className="nav__link">Dungeons</NavLink>
        <NavLink className="nav__link">Arena</NavLink>
        <NavLink className="nav__link">RBG</NavLink>
        <NavLink className="nav__link">Mounts</NavLink>
        <NavLink className="nav__link">TBC</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
