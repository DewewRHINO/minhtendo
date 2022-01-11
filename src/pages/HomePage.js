import React from "react";
// Local API
import news_short from "../_api/news_short";
import bestseller_games from "../_api/bestseller_games";

import "./HomePage.css";
import { CenterStage } from "../components/homepage/CenterStage";
import { CTABlade } from "../components/homepage/CTABlade";
import SwitchShadow from "../media/Game_Store_Switch_Games.png";
import HolidayGiftsImage from "../media/HGG_CTAminiblade.avif";
import { AdGraphic } from "../components/homepage/AdGraphic";
import { LatestNews } from "../components/homepage/LatestNews";
import { CardSlider } from "../components/homepage/CardSlider";
import { SectionHeader } from "../common_components/SectionHeader";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <CenterStage />
      <hr className="section-separator" />
      <CardSlider data={bestseller_games} />
      <hr className="section-separator" />
      <CTABlade
        imgUrl={SwitchShadow}
        imgAlt={"CTA Graphic"}
        bladeDesc={"Game Store: Buy, download, and play right away!"}
        buttonText={"Shop games"}
        buttonUrl={"/"}
      />
      <hr className="section-separator" />
      <SectionHeader heading="Explore gaming systems" />
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
      <SectionHeader heading="Best-selling games" fontSize="2rem" />
      <CardSlider
        data={bestseller_games}
        showDate
        showPrice
        showWishlistButton
      />
      <hr className="section-separator" />
      <SectionHeader heading="News" />
      <LatestNews data={news_short} />
      <hr className="section-separator" />
      <SectionHeader heading="Nintendo Switch new releases" fontSize="2rem" />
      <CardSlider
        data={bestseller_games}
        showDate
        showPrice
        showWishlistButton
      />
    </div>
  );
};
