import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-section nav-sec-1 container-fluid">
        <div className="row nav-sec-1-row">
          <div className="col-2 logo-col">
            <img
              src={require("../media/landscape-logo.png")}
              alt="landscape logo"
            />
          </div>
          <div className="col-3 search-col">
            <label htmlFor="searchfield" className="searchlabel">
              &#128269;
            </label>
            <input
              className="searchfield"
              placeholder="Search games, systems, supports, etc."
            />
          </div>
          <div className="col-4 spacing-col"> </div>
          <div className="col-1 btn-col">Support</div>
          <div className="col-1 btn-col">Wish List</div>
          <div className="col-1 btn-col">Login/Signup</div>
        </div>
      </div>
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
