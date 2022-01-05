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
    const cardWidth =
      tiles.childNodes[0].offsetWidth +
      parseFloat(getComputedStyle(tiles).fontSize) * 2; //  width of 1 card + 2 rem flex gap
    if (dir === "next") {
      // to scroll by a total width of FULLY visible cards (so that the next scroll starts from the left edge of the next card perfectly)
      tiles.scrollLeft += Math.floor(tiles.clientWidth / cardWidth) * cardWidth;
      if (lastScrollPos === tiles.scrollLeft) tiles.scrollLeft = 0; //  loop scroll back from the start if it is the end
    } else if (dir === "prev") {
      tiles.scrollLeft -= Math.floor(tiles.clientWidth / cardWidth) * cardWidth;
    }
    setLastScrollPos(tiles.scrollLeft);
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
