import React from "react";
import "./CenterStage.css";
import BigBrainAcademy from "../../media/pikminh-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const CenterStage = () => {
  return (
    <div className="CenterStage">
      <div className="cstage-img-container">
        <img src={BigBrainAcademy} alt="center stage" />
      </div>
      <div className="cstage-tail">
        <span className="avai-now">Available Now</span>
        <button className="action-button learn-more">
          Learn more
          <FontAwesomeIcon icon={faAngleRight} className="action-button-icon" />
        </button>
        <div className="d-none d-md-flex age-badge-container">
          <img
            className="age-badge"
            src={require("../../media/esrb-everyone.png")}
            alt="ESRB E"
          />
          <div className="age-badge-info">
            <span>Mild Cartoon Violence</span>
            <hr className="separator"></hr>
            <span>In-Game Purchases</span>
          </div>
        </div>
      </div>
    </div>
  );
};
