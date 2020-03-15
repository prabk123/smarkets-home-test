import React from "react";
import { Link } from "react-router-dom";
import "./HeaderBar.css";

const NavHeader = () => {
  return (
    <div className="header-bar" data-test="HeaderBar">
      <Link to="/sports/football">
        <img
          data-test="image"
          className="header-logo"
          src="https://smarkets.com/static/img/smarkets-logo.svg"
          alt="Header Logo"
        />
      </Link>
      <div data-test="info">
        <div className="header-title">PRABODH KAKODKAR</div>
        <div className="header-meta">TAKE HOME TEST</div>
      </div>
    </div>
  );
};

export default NavHeader;
