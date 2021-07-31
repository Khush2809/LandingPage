import React from "react";
import "./../css/Navbar.css";
import FinalLogo from "./../Images/FinalLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={FinalLogo} alt="logo" style={{ marginRight: "10rem" }}></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "30%",
        }}
      >
        <div>
          <NavLink to="/" className="nav-links1">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/FAQ" className="nav-links1">
            FAQ
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
