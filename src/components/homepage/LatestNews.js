import React from "react";
import "./LatestNews.css";
import { toMMDDYY } from "../../util/conversions";

export const LatestNews = ({ data }) => {
  const allNews = [...data];
  //  sort news chronologically
  const newToOldSortedNews = allNews.sort(
    (a, b) => Number(b.postDateEpoch) - Number(a.postDateEpoch)
  );
  //  format the dates
  const formattedNews = [...newToOldSortedNews];
  for (let i = 0; i < formattedNews.length; i++) {
    formattedNews[i].date = toMMDDYY(formattedNews[i].postDateEpoch);
  }
  //  separate out the two most recent news to style differently
  const mostRecentNews = formattedNews.slice(0, 2);
  const olderNews = formattedNews.slice(-4);
  return (
    <div className="LatestNews">
      <div className="big-size-news">
        {mostRecentNews.map((news) => (
          <div className="news-card" key={news.id}>
            <div className="card-img-container">
              <img src={news.postImg} alt={news.postImgAlt} />
            </div>
            <p className="card-date">{news.date}</p>
            <p className="card-title">{news.postTitle}</p>
            <p className="card-desc">{news.postIntro}</p>
            <div className="read-more-btn">
              <span className="btn-text">Read more</span>
              <span className="btn-icon">{" >"}</span>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="small-size-news">
        {olderNews.map((news) => (
          <div className="news-card" key={news.id}>
            older news
          </div>
        ))}
      </div> */}
    </div>
  );
};
