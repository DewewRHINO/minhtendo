import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-section nav-sec-1">Main Section Of Nav</div>
      <div className="nav-section nav-sec-2">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/games">
          <button>Games</button>
        </Link>
        <Link to="/hardwares">
          <button>Hardware</button>
        </Link>
        <Link to="/whatsnew">
          <button>News</button>
        </Link>
        <Link to="/holiday">
          <button>Holiday Gifts</button>
        </Link>
      </div>
    </div>
  );
};
