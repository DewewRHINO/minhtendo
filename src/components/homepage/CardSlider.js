import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toMMDDYY } from "../../util/conversions";
import "./CardSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

// PARAMETERS
// Array data
// Boolean showDate, showPrice, showWishlistButton
export const CardSlider = ({
  data,
  showDate,
  showPrice,
  showWishlistButton,
}) => {
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [showPrevScrollBtn, setShowPrevScrollBtn] = useState(false);
  const tilesRef = useRef();
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

  const handleScrollTiles = (dir) => {
    const tiles = tilesRef.current;
    const cardWidth =
      tiles.childNodes[0].offsetWidth +
      parseFloat(getComputedStyle(tiles).fontSize) * 2; // total width of (1 card + 2 rem flex gap)
    if (dir === "next") {
      //   The following Math calculations make sure NEXTscroll always aligns cards left-first
      tiles.scrollLeft += Math.floor(tiles.clientWidth / cardWidth) * cardWidth;
      if (lastScrollPos === tiles.scrollLeft) tiles.scrollLeft = 0; //  looping the scroll
    } else if (dir === "prev") {
      //   The following Math calculations make sure PREVscroll always aligns cards left-first,
      //   by calculating scroll conditionally when a left-side offset is created on the last scroll
      Math.ceil(tiles.scrollLeft) % cardWidth
        ? (tiles.scrollLeft -=
            Math.floor(tiles.clientWidth / cardWidth) * cardWidth +
            (Math.ceil(tiles.scrollLeft) % cardWidth) -
            cardWidth)
        : (tiles.scrollLeft -=
            Math.floor(tiles.clientWidth / cardWidth) * cardWidth);
    }
    setLastScrollPos(tiles.scrollLeft);
    //  Hide Prev Btn when not needed
    tiles.scrollLeft !== 0
      ? setShowPrevScrollBtn(true)
      : setShowPrevScrollBtn(false);
  };

  return (
    <div className="CardSlider">
      <div className="rail">
        <div className="tiles" ref={tilesRef}>
          {games.map((game) => (
            <div className="game-card" key={game.gameId}>
              <Link to="">
                <div className="card-img-container">
                  <img src={game.gameImg} alt={game.gameImgAlt} />
                </div>
              </Link>
              {showDate === true && <p className="card-date">{game.date}</p>}
              <p className="game-name card-title">{game.gameName}</p>
              {showPrice === true && (
                <p className="game-price card-title">{game.gameCurrentPrice}</p>
              )}
              <div className="card-tail">
                <span className="game-platform">{game.gamePlatform}</span>
                {showWishlistButton === true && (
                  <span className="wishlist-btn">
                    <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        {showPrevScrollBtn && (
          <button
            className="prev-btn"
            onClick={() => handleScrollTiles("prev")}
          >
            <FontAwesomeIcon icon={faAngleLeft} className="control-icon" />
          </button>
        )}
        <button className="next-btn" onClick={() => handleScrollTiles("next")}>
          <FontAwesomeIcon icon={faAngleRight} className="control-icon" />
        </button>
      </div>
    </div>
  );
};
