import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-section nav-sec-1">
        <div className="brand-box">
          <img src={require("../media/landscape-logo.png")} alt="brand" />
        </div>
        <div className="search-box">
          <div className="search-box-content">
            <label htmlFor="searchfield" className="searchlabel">
              &#128269;
            </label>
            <input
              className="searchfield"
              placeholder="Search games, systems, supports, etc."
              size={50}
            />
          </div>
        </div>
        <div className="nav-buttons">
          <div className="nav-btn-box">
            <Link to="/" className="my-nav-btn">
              <span>⚫ Support</span>
            </Link>
          </div>
          <div className="nav-btn-box">
            <Link to="/" className="my-nav-btn">
              <span>⚫ Wish List</span>
            </Link>
          </div>
          <div className="nav-btn-box">
            <Link to="/" className="my-nav-btn">
              <span>⚫ Login / Signup</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-section nav-sec-2">
        <div className="nav-sec-2-content">
          <Link to="/games" className="my-nav-btn">
            <span>Games</span>
          </Link>
          <Link to="/hardwares" className="my-nav-btn">
            <span>Hardware</span>
          </Link>
          <Link to="/whatsnew" className="my-nav-btn">
            <span>News & Events</span>
          </Link>
          <Link to="/playnintendo" className="my-nav-btn">
            <span>Play Nintendo</span>
          </Link>
          <Link to="/holiday" className="my-nav-btn">
            <span>Holiday Gifts Guide</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
