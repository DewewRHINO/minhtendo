import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="content-container">
        <div className="footer-actions">
          <div className="socials-container">
            <div className="social-actions">
              <Link className="social-action" to="/">
                Contact Us
              </Link>
              <Link className="social-action" to="/">
                Website Feedback
              </Link>
            </div>
            <div className="grouped-socialmedia">
              <Link className="social-media-link to-facebook" to="/">
                ◆
              </Link>
              <Link className="social-media-link to-instagram" to="/">
                ♠️
              </Link>
              <Link className="social-media-link to-twitter" to="/">
                ♥
              </Link>
              <Link className="social-media-link to-youtube" to="/">
                ♣️
              </Link>
            </div>
          </div>
          <div className="badge-container">
            <img
              className="privacy-badge-img"
              src={require("../media/esrb-privacy.png")}
              alt="privacy badge"
            ></img>
          </div>
        </div>
        <div className="footer-infos text-center">
          <p>© 2021 Nintendo. Games are property of their respective owners.</p>
          <p>
            Nintendo of America Inc. | Headquarters are in Redmond, Washington,
            USA |{" "}
            <span>
              <Link className="support-btn" to="/">
                Support
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
