import React from "react";
import "./HomePage.css";
import { CenterStage } from "../components/homepage/CenterStage";
import { CTABlade } from "../components/homepage/CTABlade";
import SwitchShadow from "../media/Game_Store_Switch_Games.png";
import HolidayGiftsImage from "../media/HGG_CTAminiblade.avif";
import { AdGraphic } from "../components/homepage/AdGraphic";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <CenterStage />
      <hr className="section-separator" />
      <CTABlade
        imgUrl={SwitchShadow}
        imgAlt={"CTA Graphic"}
        bladeDesc={"Game Store: Buy, download, and play right away!"}
        buttonText={"Shop games"}
        buttonUrl={"/"}
      />
      <hr className="section-separator" />
      <AdGraphic />
      <hr className="section-separator" />
      <CTABlade
        imgUrl={HolidayGiftsImage}
        imgAlt={"CTA Graphic"}
        bladeDesc={
          "Holiday Gift Guide: Spark a smile with the perfect present."
        }
        buttonText={"Find gifts"}
        buttonUrl={"/"}
        bladeBgColor={"#5C0201"}
      />
    </div>
  );
};
