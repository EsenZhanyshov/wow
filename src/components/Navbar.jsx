import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="nav">
      <div className="nav__menu">
        <NavLink to="/person" className="nav__link">Person</NavLink>
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
