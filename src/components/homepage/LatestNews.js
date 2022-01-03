import React from "react";
import "./LatestNews.css";
import { toMMDDYY } from "../../util/conversions";

export const LatestNews = ({ data }) => {
  const allNews = [...data];
  const newToOldSortedNews = allNews.sort(
    (a, b) => Number(b.postDateEpoch) - Number(a.postDateEpoch)
  );
  const formattedNews = [...newToOldSortedNews];
  for (let i = 0; i < formattedNews.length; i++) {
    formattedNews[i].date = toMMDDYY(formattedNews[i].postDateEpoch);
  }
  const mostRecentNews = formattedNews.slice(0, 2);
  const olderNews = formattedNews.slice(-4);
  return (
    <div className="LatestNews">
      <div className="big-size-news">
        {mostRecentNews.map((news) => (
          <div className="news-card" key={news.id}>
            <div className="card-img-container">
              <img src={news.postImg} alt={news.postImgAlt} />
              <p>{news.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="small-size-news">
        {olderNews.map((news) => (
          <div className="news-card" key={news.id}>
            older news
          </div>
        ))}
      </div>
    </div>
  );
};
