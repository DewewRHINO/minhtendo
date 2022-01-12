import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="social-media-link-icon"
                />
              </Link>
              <Link className="social-media-link to-instagram" to="/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-media-link-icon"
                />
              </Link>
              <Link className="social-media-link to-twitter" to="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social-media-link-icon"
                />
              </Link>
              <Link className="social-media-link to-youtube" to="/">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="social-media-link-icon"
                />
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
