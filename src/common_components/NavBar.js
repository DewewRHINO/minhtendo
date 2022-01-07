import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import BrandLogo from "../media/landscape-logo.png";

export const NavBar = ({ innerRef, setOpenSearch, openSearch }) => {
  // const [openSearch, setOpenSearch] = useState(true);
  return (
    <div className="NavBar" ref={innerRef}>
      <div className="nav-section nav-sec-1">
        <div className="brand-box">
          <Link to="">
            <img src={BrandLogo} alt="brand" />
          </Link>
        </div>
        <div className="search-box">
          <div
            className="search-box-content"
            onClick={() => setOpenSearch(true)}
          >
            <label htmlFor="searchfield" className="searchlabel">
              &#128269;
            </label>
            <input
              className="searchfield"
              placeholder="Search games, systems, supports, etc."
              size={50}
            />
          </div>
          {openSearch && (
            <div className="search-assist">
              <div
                className="overlay-shadow"
                onClick={() => setOpenSearch(false)}
              ></div>
              <div className="search-assist-content">
                <div className="nav-section nav-sec-1 duplicate-logo-and-input">
                  <div className="brand-box">
                    <Link to="">
                      <img src={BrandLogo} alt="brand" />
                    </Link>
                  </div>
                  <div className="search-box">
                    <div className="search-box-content">
                      <label htmlFor="searchfield" className="searchlabel">
                        &#128269;
                      </label>
                      <input
                        className="searchfield"
                        placeholder="Search Nintendo.com"
                        size={50}
                        autoFocus
                      />
                    </div>
                    <span
                      className="close-search-btn"
                      onClick={() => setOpenSearch(false)}
                    >
                      X
                    </span>
                  </div>
                </div>
                <div className="search-suggestion-box">
                  <div className="quick-links">
                    <div className="suggestions">
                      <p className="suggestion-title">Suggestions</p>
                      <Link to="" className="suggestion-link">
                        <p>Nintendo Switch</p>
                      </Link>
                      <Link to="" className="suggestion-link">
                        <p>Nintendo Switch Games</p>
                      </Link>
                      <Link to="" className="suggestion-link">
                        <p>Nintendo Switch Online</p>
                      </Link>
                      <Link to="" className="suggestion-link">
                        <p>Nintendo news</p>
                      </Link>
                      <Link to="" className="suggestion-link">
                        <p>Ring Fit Adventure</p>
                      </Link>
                      <Link to="" className="suggestion-link">
                        <p>Mario games</p>
                      </Link>
                      <Link to="" className="suggestion-link">
                        <p>Zelda games</p>
                      </Link>
                      <Link to="" className="suggestion-link">
                        <p>Pokemon games</p>
                      </Link>
                    </div>
                    <div className="link-cards"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
