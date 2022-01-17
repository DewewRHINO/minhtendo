import React from "react";
import { Link } from "react-router-dom";
import "./WebRoadmap.css";

export const WebRoadmap = ({ viewportWidth }) => {
  return (
    <div className="WebRoadmap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 linkgroup-container">
            <p className="linkgroup-title">About Nintendo</p>
            <ul className="grouped-links">
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
            <p className="linkgroup-title">Where to Buy</p>
            <ul className="grouped-links">
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
            <p className="linkgroup-title">Support</p>
            <ul className="grouped-links">
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
            <p className="linkgroup-title">Parents</p>
            <ul className="grouped-links">
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
            <p className="linkgroup-title">Community</p>
            <ul className="grouped-links">
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
            <p className="linkgroup-title">Privacy</p>
            <ul className="grouped-links">
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
            <p className="linkgroup-title">Legal</p>
            <ul className="grouped-links">
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
