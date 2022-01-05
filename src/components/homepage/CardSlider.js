import React from "react";
import { Link } from "react-router-dom";
import { toMMDDYY } from "../../util/conversions";
import "./CardSlider.css";

// PARAMETERS
// Array data
// String heading
// Boolean displayDate, displayPrice, hasFavButton
export const CardSlider = ({
  data,
  displayDate,
  displayPrice,
  hasFavButton,
}) => {
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
      <div className="rail">
        <div className="tiles">
          {games.map((game) => (
            <div className="game-card" key={game.gameId}>
              <Link to="">
                <div className="card-img-container">
                  <img src={game.gameImg} alt={game.gameImgAlt} />
                </div>
              </Link>
              {displayDate === true && <p className="card-date">{game.date}</p>}
              <p className="game-name card-title">{game.gameName}</p>
              {displayPrice === true && (
                <p className="game-price card-title">{game.gameCurrentPrice}</p>
              )}
              <div className="card-tail">
                <span className="game-platform">{game.gamePlatform}</span>
                {hasFavButton === true && <span className="fav-btn">♡</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="controls">
          <button className="prev-btn">{"<"}</button>
          <button className="next-btn">{">"}</button>
        </div>
      </div>
    </div>
  );
};
