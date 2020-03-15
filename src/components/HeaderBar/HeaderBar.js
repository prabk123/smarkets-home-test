import React from "react";
import { Link } from "react-router-dom";
import "./HeaderBar.css";

const NavHeader = () => {
  return (
    <div className="header-bar">
      <Link to="/sports/football">
        <img
          className="header-logo"
          src="https://smarkets.com/static/img/smarkets-logo.svg"
          alt="Header Logo"
        />
      </Link>
      <div>
        <div className="header-title">PRABODH KAKODKAR</div>
        <div className="header-meta">TAKE HOME TEST</div>
      </div>
    </div>
  );
};

export default NavHeader;
