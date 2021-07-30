import React from "react";
import "./../css/Navbar.css";
import FinalLogo from "./../Images/FinalLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div>
          <img src={FinalLogo} alt="logo" className="logo"></img>
        </div>
        <div>
          <ul>
            <NavLink to="/Home" className="nav-links1">
              Home
            </NavLink>
            <NavLink to="/FAQ" className="nav-links2">
              FAQ
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
