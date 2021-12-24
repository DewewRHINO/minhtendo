import React from "react";
import "./HomePage.css";
import { CenterStage } from "../components/homepage/CenterStage";
import { CTABlade } from "../components/homepage/CTABlade";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <CenterStage />
      <hr className="section-separator" />
      <CTABlade
        imgUrl={"../../media/Game_Store_Switch_Games.png"}
        imgAlt={"CTA Graphic"}
        bladeDesc={"Game Store: Buy, download, and play right away!"}
        buttonText={"Shop games"}
        buttonUrl={"/"}
      />
      <hr className="section-separator" />
      <CTABlade />
    </div>
  );
};
