import React from "react";
// Local API
import news_short from "../_api/news_short";
import latest_games from "../_api/latest_games";

import "./HomePage.css";
import { CenterStage } from "../components/homepage/CenterStage";
import { CTABlade } from "../components/homepage/CTABlade";
import SwitchShadow from "../media/Game_Store_Switch_Games.png";
import HolidayGiftsImage from "../media/HGG_CTAminiblade.avif";
import { AdGraphic } from "../components/homepage/AdGraphic";
import { LatestNews } from "../components/homepage/LatestNews";
import { CardSlider } from "../components/homepage/CardSlider";

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
      <hr className="section-separator" />
      <LatestNews data={news_short} />
      <hr className="section-separator" />
      <CardSlider
        data={latest_games}
        heading="Best-selling games"
        containsPrice={true}
      />
      <hr className="section-separator" />
    </div>
  );
};
