import React from "react";
import "./CTABlade.css";

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
        <img className="blade-img" src={imgUrl} alt={imgAlt} />
      </div>
      <div className="blade-elements">
        <div className="blade-text-container">
          <p className="blade-text">{bladeDesc}</p>
        </div>
        <div className="cta-btn-container">
          <span className="action-button cta-btn">{buttonText + " >"}</span>
        </div>
      </div>
    </div>
  );
};
