import React from "react";
import "./CTABlade.css";
import SwitchShadow from "../../media/Game_Store_Switch_Games.png";

export const CTABlade = ({
  imgUrl,
  imgAlt,
  bladeDesc,
  buttonText,
  buttonUrl,
  bladeBgColor,
  bladeTextColor,
}) => {
  return (
    <div
      className="CTABlade"
      style={{ backgroundColor: bladeBgColor, color: bladeTextColor }}
    >
      <div className="blade-img-container">
        <img
          className="blade-img"
          src={imgUrl || SwitchShadow}
          alt={imgAlt || "CTA Graphic"}
        />
      </div>
      <div className="blade-elements">
        <div className="blade-text-container">
          <p className="blade-text">
            {bladeDesc || "Nintendo is loved by every age group of gamers!"}
          </p>
        </div>
        <div className="cta-btn-container">
          <span className="action-button cta-btn">
            {buttonText ? buttonText + " >" : "More >"}
          </span>
        </div>
      </div>
    </div>
  );
};
