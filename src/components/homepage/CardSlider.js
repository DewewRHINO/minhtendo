import React from "react";
import { Link } from "react-router-dom";
import { toMMDDYY } from "../../util/conversions";
import "./CardSlider.css";

export const CardSlider = ({ data }) => {
  const games = [...data];
  //  sort chronologically
  const newToOldSortedGames = games.sort(
    (a, b) => Number(b.releaseDateEpoch) - Number(a.releaseDateEpoch)
  );
  //  format the dates
  const formattedNews = [...newToOldSortedGames];
  for (let i = 0; i < formattedNews.length; i++) {
    formattedNews[i].date = toMMDDYY(formattedNews[i].releaseDateEpoch);
  }
  return (
    <div className="CardSlider">
      <p className="heading">Best-selling games</p>
      <div className="rail">
        <div className="tiles">
          {games.map((game) => (
            <div className="game-card" key={game.gameId}>
              <Link to="">
                <div className="card-img-container">
                  <img src={game.gameImg} alt={game.gameImgAlt} />
                </div>
              </Link>
              <p className="card-date">{game.date}</p>
              <p className="card-title">{game.gameName}</p>
              <p className="game-price card-title">{game.gameCurrentPrice}</p>
              <div className="card-tail">
                <span className="game-platform">{game.gamePlatform}</span>
                <span className="fav-btn">♡</span>
              </div>
            </div>
          ))}
        </div>
        <div className="controls"></div>
      </div>
    </div>
  );
};
