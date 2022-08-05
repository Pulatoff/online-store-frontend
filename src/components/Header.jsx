import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">STORE</div>
      <nav>
        <ul>
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
