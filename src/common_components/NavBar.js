import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import BrandLogo from "../media/landscape-logo.png";
import RegionUS from "../media/lang-us.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faQuestionCircle,
  faHeart,
  faUser,
  faAngleDown,
  faGamepad,
  faMouse,
  faNewspaper,
  faStar,
  faCalendarAlt,
  faTag,
  faMobile,
  faTools,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar = ({
  innerRef,
  setOpenSearch,
  openSearch,
  viewportWidth,
  setViewportWidth,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [openSideNav, setOpenSideNav] = useState(false);
  const [activeExpandedNav, setActiveExpandedNav] = useState(""); //  "" or "GAMES" or "HARDWARES"
  const searchRef = useRef();
  useEffect(() => {
    openSearch && searchRef.current.focus();
    openSearch || setSearchInput("");
  }, [openSearch, searchInput]);

  useEffect(() => {
    const closeExpandedNav = () => {
      setActiveExpandedNav("");
    };
    document.addEventListener("scroll", closeExpandedNav);
    return () => {
      document.removeEventListener("scroll", closeExpandedNav);
    };
  }, []);

  const handleSideNavToggle = () => {
    openSideNav ? setOpenSideNav(false) : setOpenSideNav(true);
  };

  return (
    <div className="NavBar toggle-nav-in" ref={innerRef}>
      <div
        className="side-nav-backdrop"
        style={
          viewportWidth > 768
            ? { display: "none" }
            : openSideNav
            ? { opacity: "1", pointerEvents: "auto" }
            : { opacity: "0", pointerEvents: "none" }
        }
        onClick={() => setOpenSideNav(false)}
      ></div>
      <div className="nav-section nav-sec-1 original-nav-1">
        <div className="brand-box">
          <Link to="">
            <img src={BrandLogo} alt="brand" />
          </Link>
        </div>
        <div className="search-box">
          <div
            className="d-none d-md-flex search-box-content"
            onClick={() => setOpenSearch(true)}
          >
            <label htmlFor="searchfield" className="searchlabel">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
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
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="search-icon"
                      />
                    </label>
                    <input
                      className="searchfield"
                      placeholder="Search Minhtendo.com"
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
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="close-search-icon"
                    />
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
                      <p>Minhtendo Switch</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Minhtendo Switch Games</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Minhtendo Switch Online</p>
                    </Link>
                    <Link
                      to=""
                      className="suggestion-link"
                      tabIndex={openSearch ? 0 : -1}
                    >
                      <p>Minhtendo news</p>
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
                  <div className="link-cards">
                    <p className="link-cards-title">Find your next game</p>
                    <div className="link-tiles">
                      <div className="tile yellow-tile">
                        <div className="tile-name">
                          <div className="tile-icon">
                            <span>
                              <FontAwesomeIcon
                                icon={faTag}
                                className="suggestion-tile-icon"
                              />
                            </span>
                          </div>
                          Games on sale
                        </div>
                      </div>
                      <div className="tile blue-tile">
                        <div className="tile-name">
                          <div className="tile-icon">
                            <span>
                              <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="suggestion-tile-icon"
                              />
                            </span>
                          </div>
                          New games
                        </div>
                      </div>
                      <div className="tile red-tile">
                        <div className="tile-name">
                          <div className="tile-icon">
                            <span>
                              <FontAwesomeIcon
                                icon={faGamepad}
                                className="suggestion-tile-icon"
                              />
                            </span>
                          </div>
                          Minhtendo Switch games
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-buttons">
          <div className="d-none d-md-flex nav-btn-box">
            <Link to="/" className="my-nav-btn">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="nav-btn-icon"
              />
              Support
            </Link>
          </div>
          <div className="d-none d-md-flex nav-btn-box">
            <Link to="/" className="my-nav-btn">
              <FontAwesomeIcon icon={faHeart} className="nav-btn-icon" />
              Wish List
            </Link>
          </div>
          <div className="nav-btn-box">
            <Link to="/" className="my-nav-btn">
              <FontAwesomeIcon icon={faUser} className="nav-btn-icon" />
              Login <span className="d-none d-md-inline">/Sign Up</span>
            </Link>
          </div>
          <div className="d-block d-md-none mobile-nav-toggler nav-btn-box">
            <Link
              to="/"
              className="my-nav-btn"
              onClick={() => handleSideNavToggle()}
            >
              {openSideNav ? (
                <FontAwesomeIcon icon={faTimes} className="nav-btn-icon" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="nav-btn-icon" />
              )}
            </Link>
          </div>
        </div>
      </div>
      <div
        className="nav-section nav-sec-2"
        style={
          viewportWidth > 768
            ? { transform: "translateX(0)" }
            : openSideNav
            ? { transform: "translateX(0)" }
            : { transform: "translateX(100%)" }
        }
      >
        <div className="nav-sec-2-content">
          <Link
            to=""
            className="d-inline-flex d-md-none my-nav-btn"
            onClick={() => {
              setActiveExpandedNav("");
              setOpenSearch(true);
            }}
          >
            <FontAwesomeIcon icon={faSearch} className="prefix-icon" />
            Search
          </Link>
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
              <FontAwesomeIcon icon={faGamepad} className="prefix-icon" />
              <span className="expand-nav-btn-label">Games</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="nav-sec-2-btn-icon"
                flip={activeExpandedNav === "GAMES" ? "vertical" : "horizontal"}
              />
            </button>
            {activeExpandedNav === "GAMES" && (
              <div className="expanded-nav">
                <div className="expdnav-content">
                  <div className="expdnav-item">
                    <button className="expdnav-btn">
                      <FontAwesomeIcon
                        icon={faGamepad}
                        className="expdnav-btn-icon"
                      />
                    </button>
                    <p className="expdnav-btn-label">Shop games</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">
                      <FontAwesomeIcon
                        icon={faTag}
                        className="expdnav-btn-icon"
                      />
                    </button>
                    <p className="expdnav-btn-label">Sales and deals</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="expdnav-btn-icon"
                      />
                    </button>
                    <p className="expdnav-btn-label">Coming soon</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">
                      <FontAwesomeIcon
                        icon={faTools}
                        className="expdnav-btn-icon"
                      />
                    </button>
                    <p className="expdnav-btn-label">Online service</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn">
                      <FontAwesomeIcon
                        icon={faMobile}
                        className="expdnav-btn-icon"
                      />
                    </button>
                    <p className="expdnav-btn-label">Mobile games</p>
                  </div>
                  <span
                    className="expdnav-close-btn"
                    onClick={() => setActiveExpandedNav("")}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="d-none d-md-block expdnav-close-btn-icon"
                    />
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
              <FontAwesomeIcon icon={faMouse} className="prefix-icon" />
              <span className="expand-nav-btn-label">Hardwares</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="nav-sec-2-btn-icon"
                flip={
                  activeExpandedNav === "HARDWARES" ? "vertical" : "horizontal"
                }
              />
            </button>
            {activeExpandedNav === "HARDWARES" && (
              <div className="expanded-nav">
                <div className="expdnav-content">
                  <div className="expdnav-item switch-img-btn-container">
                    <button className="expdnav-btn switch-img-btn">
                      <img
                        src="https://assets.nintendo.com/image/upload/q_auto,f_auto,w_240/Nclood/nav/switch-lineup"
                        alt="Switch Lineup"
                      />
                    </button>
                    <p className="expdnav-btn-label">Minhtendo Switch Lineup</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn accs-img-btn">
                      <img
                        src="https://assets.nintendo.com/image/upload/q_auto,f_auto,w_104/Nclood/nav/accessories"
                        alt="Accessories"
                      />
                    </button>
                    <p className="expdnav-btn-label">Accessories</p>
                  </div>
                  <div className="expdnav-item">
                    <button className="expdnav-btn amiibo-img-btn">
                      <img
                        src="https://assets.nintendo.com/image/upload/q_auto,f_auto,w_104/Nclood/nav/amiibo"
                        alt="amiibo"
                      />
                    </button>
                    <p className="expdnav-btn-label">amiibo</p>
                  </div>
                  <span
                    className="expdnav-close-btn"
                    onClick={() => setActiveExpandedNav("")}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="d-none d-md-block expdnav-close-btn-icon"
                    />
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
            <FontAwesomeIcon icon={faNewspaper} className="prefix-icon" />
            News & Events
          </Link>
          <Link
            to=""
            className="my-nav-btn"
            onClick={() => setActiveExpandedNav("")}
          >
            <FontAwesomeIcon icon={faStar} className="prefix-icon" />
            Play Minhtendo
          </Link>
          <Link
            to=""
            className="my-nav-btn event-based-nav-btn"
            onClick={() => setActiveExpandedNav("")}
          >
            <span>Holiday Gifts Guide</span>
          </Link>
          <hr className="section-separator" />
          <Link
            to=""
            className="d-flex d-md-none my-nav-btn"
            onClick={() => setActiveExpandedNav("")}
          >
            <FontAwesomeIcon icon={faHeart} className="prefix-icon" />
            Wish List
          </Link>
          <Link
            to=""
            className="d-flex d-md-none my-nav-btn"
            onClick={() => setActiveExpandedNav("")}
          >
            <FontAwesomeIcon icon={faQuestionCircle} className="prefix-icon" />
            Support
          </Link>
          <Link
            to=""
            className="d-flex d-md-none my-nav-btn"
            onClick={() => setActiveExpandedNav("")}
          >
            <img
              src={RegionUS}
              alt="Region US"
              className="prefix-icon region-icon"
            />
            Change Region
          </Link>
        </div>
      </div>
    </div>
  );
};
