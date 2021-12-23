import React from "react";
import "./CenterStage.css";

export const CenterStage = () => {
  return (
    <div className="CenterStage">
      <div className="cstage-img-container">
        <img
          src={require("../../media/BigBrainAcademy-BrainvsBrain_v01.avif")}
          alt="center stage"
        />
      </div>
      <div className="cstage-tail">
        <span className="avai-now">Available Now</span>
        <span className="learn-more">Learn more {">"}</span>
        <div className="age-badge-container">
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
