import React from "react";
import "./AdGraphic.css";
import GamingSystemGraphic from "../../media/ExploreGamingSystems.jfif";

export const AdGraphic = () => {
  return (
    <div className="AdGraphic">
      <p className="heading">Explore gaming systems</p>
      <div className="img-container">
        <img src={GamingSystemGraphic} alt="graphic ad" />
      </div>
      <div className="action-box">
        <span className="action-text">
          Nintendo Switch family - Three ways to play
        </span>
        <span className="action-button red-btn">
          Starting at $199.99 {" >"}
        </span>
      </div>
    </div>
  );
};
