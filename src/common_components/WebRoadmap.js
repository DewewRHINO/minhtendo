import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WebRoadmap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const WebRoadmap = ({ viewportWidth }) => {
  const [shownSection, setShownSection] = useState("");
  useEffect(() => {
    console.log(shownSection);
  });

  return (
    <div className="WebRoadmap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 linkgroup-container">
            <p
              className="linkgroup-title"
              onClick={() =>
                shownSection === "ABOUT"
                  ? setShownSection("")
                  : setShownSection("ABOUT")
              }
            >
              About Nintendo
              <FontAwesomeIcon
                icon={faAngleDown}
                className="d-block d-md-none collapse-icon"
              />
            </p>
            <ul
              className="grouped-links"
              style={
                viewportWidth <= 768
                  ? shownSection === "ABOUT"
                    ? { display: "block" }
                    : { display: "none" }
                  : {}
              }
            >
              <li>
                <Link to="/" className="roadmap-link">
                  Company Info
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  CSR Report
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  IP Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2 linkgroup-container">
            <p
              className="linkgroup-title"
              onClick={() =>
                shownSection === "BUY"
                  ? setShownSection("")
                  : setShownSection("BUY")
              }
            >
              Where to Buy
              <FontAwesomeIcon
                icon={faAngleDown}
                className="d-block d-md-none collapse-icon"
              />
            </p>
            <ul
              className="grouped-links"
              style={
                viewportWidth <= 768
                  ? shownSection === "BUY"
                    ? { display: "block" }
                    : { display: "none" }
                  : {}
              }
            >
              <li>
                <Link to="/" className="roadmap-link">
                  Game Store
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Nintendo NY
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Nintendo Store
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Online Retailers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2 linkgroup-container">
            <p
              className="linkgroup-title"
              onClick={() =>
                shownSection === "SUPPORT"
                  ? setShownSection("")
                  : setShownSection("SUPPORT")
              }
            >
              Support
              <FontAwesomeIcon
                icon={faAngleDown}
                className="d-block d-md-none collapse-icon"
              />
            </p>
            <ul
              className="grouped-links"
              style={
                viewportWidth <= 768
                  ? shownSection === "SUPPORT"
                    ? { display: "block" }
                    : { display: "none" }
                  : {}
              }
            >
              <li>
                <Link to="/" className="roadmap-link">
                  Health & Safety Precautions
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Nintendo Switch
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Nintendo 3DS
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Repair
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Nintendo Product Recycling
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2 linkgroup-container">
            <p
              className="linkgroup-title"
              onClick={() =>
                shownSection === "PARENTS"
                  ? setShownSection("")
                  : setShownSection("PARENTS")
              }
            >
              Parents
              <FontAwesomeIcon
                icon={faAngleDown}
                className="d-block d-md-none collapse-icon"
              />
            </p>
            <ul
              className="grouped-links"
              style={
                viewportWidth <= 768
                  ? shownSection === "PARENTS"
                    ? { display: "block" }
                    : { display: "none" }
                  : {}
              }
            >
              <li>
                <Link to="/" className="roadmap-link">
                  Info for Parents
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Parental Controls
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2 linkgroup-container">
            <p
              className="linkgroup-title"
              onClick={() =>
                shownSection === "COMMUNITY"
                  ? setShownSection("")
                  : setShownSection("COMMUNITY")
              }
            >
              Community
              <FontAwesomeIcon
                icon={faAngleDown}
                className="d-block d-md-none collapse-icon"
              />
            </p>
            <ul
              className="grouped-links"
              style={
                viewportWidth <= 768
                  ? shownSection === "COMMUNITY"
                    ? { display: "block" }
                    : { display: "none" }
                  : {}
              }
            >
              <li>
                <Link to="/" className="roadmap-link">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Online Safety Principles
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2 linkgroup-container">
            <p
              className="linkgroup-title"
              onClick={() =>
                shownSection === "PRIVACY"
                  ? setShownSection("")
                  : setShownSection("PRIVACY")
              }
            >
              Privacy
              <FontAwesomeIcon
                icon={faAngleDown}
                className="d-block d-md-none collapse-icon"
              />
            </p>
            <ul
              className="grouped-links"
              style={
                viewportWidth <= 768
                  ? shownSection === "PRIVACY"
                    ? { display: "block" }
                    : { display: "none" }
                  : {}
              }
            >
              <li>
                <Link to="/" className="roadmap-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Cookies and Interest-Based ads
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-12 col-md-2 linkgroup-container">
            <p
              className="linkgroup-title"
              onClick={() =>
                shownSection === "LEGAL"
                  ? setShownSection("")
                  : setShownSection("LEGAL")
              }
            >
              Legal
              <FontAwesomeIcon
                icon={faAngleDown}
                className="d-block d-md-none collapse-icon"
              />
            </p>
            <ul
              className="grouped-links"
              style={
                viewportWidth <= 768
                  ? shownSection === "LEGAL"
                    ? { display: "block" }
                    : { display: "none" }
                  : {}
              }
            >
              <li>
                <Link to="/" className="roadmap-link">
                  Documents and Policies
                </Link>
              </li>
              <li>
                <Link to="/" className="roadmap-link">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 linkgroup-container">
            <Link to="/" className="linkgroup-title region-changer">
              Change region
              <img
                className="region-icon"
                src={require("../media/lang-us.png")}
                alt="region"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
