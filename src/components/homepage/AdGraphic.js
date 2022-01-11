import React from "react";
import "./AdGraphic.css";
import GamingSystemGraphic from "../../media/ExploreGamingSystems.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const AdGraphic = () => {
  return (
    <div className="AdGraphic">
      <div className="img-container">
        <img src={GamingSystemGraphic} alt="graphic ad" />
      </div>
      <div className="action-box">
        <span className="action-text">
          Nintendo Switch family - Three ways to play
        </span>
        <span className="action-button red-btn">
          Starting at $199.99
          <FontAwesomeIcon icon={faAngleRight} className="action-button-icon" />
        </span>
      </div>
    </div>
  );
};
