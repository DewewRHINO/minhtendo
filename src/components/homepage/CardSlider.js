import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toMMDDYY } from "../../util/conversions";
import "./CardSlider.css";

// PARAMETERS
// Array data
// Boolean displayDate, displayPrice, hasFavButton
export const CardSlider = ({
  data,
  displayDate,
  displayPrice,
  hasFavButton,
}) => {
  const [lastScrollPos, setLastScrollPos] = useState(0);
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

  const handleScrollTiles = (e, dir) => {
    const tiles =
      e.target.parentElement.parentElement.childNodes[0].childNodes[0];
    if (dir === "next") {
      console.log("Last pos ", lastScrollPos);
      lastScrollPos > 0 && lastScrollPos === tiles.scrollLeft
        ? (tiles.scrollLeft = 0)
        : (tiles.scrollLeft += window.innerWidth);
    } else if (dir === "prev") {
      tiles.scrollLeft -= window.innerWidth;
    }
    setLastScrollPos(tiles.scrollLeft);
    console.log("After scroll: ", tiles.scrollLeft, lastScrollPos);
  };

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
      </div>
      <div className="controls">
        <button
          className="prev-btn"
          onClick={(e) => handleScrollTiles(e, "prev")}
        >
          {"<"}
        </button>
        <button
          className="next-btn"
          onClick={(e) => handleScrollTiles(e, "next")}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
