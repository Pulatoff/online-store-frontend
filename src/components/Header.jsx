import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to={"/"}>STORE</NavLink>
      </div>
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div className="header__profile">
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
      </div>
    </div>
  );
};

export default Header;
