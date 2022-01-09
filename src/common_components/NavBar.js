import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import BrandLogo from "../media/landscape-logo.png";

export const NavBar = ({ innerRef, setOpenSearch, openSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [activeExpandedNav, setActiveExpandedNav] = useState(""); //  "" or "GAMES" or "HARDWARES"
  const searchRef = useRef();
  useEffect(() => {
    openSearch && searchRef.current.focus();
    openSearch || setSearchInput("");
  }, [openSearch, searchInput]);

  return (
    <div className="NavBar toggle-nav-in" ref={innerRef}>
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
              tabIndex={-1}
            />
          </div>
          <div
            className="search-assist"
            style={
              openSearch ? { pointerEvents: "auto" } : { pointerEvents: "none" }
            }
          >
            <div
              className="overlay-shadow"
              onClick={() => setOpenSearch(false)}
              style={openSearch ? { opacity: "0.8" } : { opacity: "0" }}
            ></div>
            <div
              className="search-assist-content"
              style={
                openSearch === true
                  ? { transform: "scaleY(1)" }
                  : { transform: "scaleY(0)" }
              }
            >
              <div className="nav-section nav-sec-1 duplicate-logo-and-input">
                <div className="brand-box">
                  <Link to="" tabIndex={-1}>
                    <img src={BrandLogo} alt="brand" />
                  </Link>
                </div>
                <div
                  className="search-box"
                  style={openSearch ? { opacity: "1" } : { opacity: "0" }}
                >
                  <div className="search-box-content">
                    <label htmlFor="searchfield" className="searchlabel">
                      &#128269;
                    </label>
                    <input
                      className="searchfield"
                      placeholder="Search Nintendo.com"
                      size={50}
                      ref={searchRef}
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      tabIndex={openSearch ? 0 : -1}
                    />
                  </div>
                  <span
                    className="close-search-btn"
                    onClick={() => setOpenSearch(false)}
                    tabIndex={openSearch ? 0 : -1}
                  >
                    X
                  </span>
                </div>
              </div>
              <div
                className="search-suggestion-box"
                style={openSearch ? { opacity: "1" } : { opacity: "0" }}
              >
                <div className="quick-links">
                  <div className="suggestions">
                    <p className="suggestion-title">Suggestions</p>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Nintendo Switch</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Nintendo Switch Games</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Nintendo Switch Online</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Nintendo news</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Ring Fit Adventure</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Mario games</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Zelda games</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Pokemon games</p>
                    </Link>
                  </div>
                  <div className="link-cards"></div>
                </div>
              </div>
            </div>
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
          <div
            className="my-nav-btn can-expand"
            style={
              activeExpandedNav === "GAMES"
                ? { borderBottom: "2px solid #e60012" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            <button
              className="expand-nav-btn"
              onClick={() =>
                activeExpandedNav === "GAMES"
                  ? setActiveExpandedNav("")
                  : setActiveExpandedNav("GAMES")
              }
              style={
                activeExpandedNav === "GAMES"
                  ? { color: "#e60012" }
                  : { color: "inherit" }
              }
            >
              Games
            </button>
            {activeExpandedNav === "GAMES" && (
              <div className="expanded-nav">
                <div className="expdnav-content">
                  <div className="expdnav-item">
                    <button className="expdnav-btn">❖</button>
                    <p className="expdnav-btn-label">Shop games</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">❖</button>
                    <p className="expdnav-btn-label">Sales and deals</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">❖</button>
                    <p className="expdnav-btn-label">Coming soon</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">❖</button>
                    <p className="expdnav-btn-label">Online service</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">❖</button>
                    <p className="expdnav-btn-label">Mobile games</p>
                  </div>
                  <span
                    className="expdnav-close-btn"
                    onClick={() => setActiveExpandedNav("")}
                  >
                    X
                  </span>
                </div>
              </div>
            )}
          </div>
          <div
            className="my-nav-btn can-expand"
            style={
              activeExpandedNav === "HARDWARES"
                ? { borderBottom: "2px solid #e60012" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            <button
              className="expand-nav-btn"
              onClick={() =>
                activeExpandedNav === "HARDWARES"
                  ? setActiveExpandedNav("")
                  : setActiveExpandedNav("HARDWARES")
              }
              style={
                activeExpandedNav === "HARDWARES"
                  ? { color: "#e60012" }
                  : { color: "inherit" }
              }
            >
              Hardwares
            </button>
            {activeExpandedNav === "HARDWARES" && (
              <div className="expanded-nav">
                <div className="expdnav-content">
                  <div className="expdnav-item">
                    <button className="expdnav-btn" style={{ width: "240px" }}>
                      ❖
                    </button>
                    <p className="expdnav-btn-label">Nintendo Switch Lineup</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">❖</button>
                    <p className="expdnav-btn-label">Accessories</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">❖</button>
                    <p className="expdnav-btn-label">amiibo</p>
                  </div>
                  <span
                    className="expdnav-close-btn"
                    onClick={() => setActiveExpandedNav("")}
                  >
                    X
                  </span>
                </div>
              </div>
            )}
          </div>
          <Link
            to=""
            className="my-nav-btn"
            onClick={() => setActiveExpandedNav("")}
          >
            <span>News & Events</span>
          </Link>
          <Link
            to=""
            className="my-nav-btn"
            onClick={() => setActiveExpandedNav("")}
          >
            <span>Play Nintendo</span>
          </Link>
          <Link
            to=""
            className="my-nav-btn"
            onClick={() => setActiveExpandedNav("")}
          >
            <span>Holiday Gifts Guide</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
