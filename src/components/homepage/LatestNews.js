import React from "react";
import "./LatestNews.css";

export const LatestNews = ({ data }) => {
  const allNews = [...data];
  const newToOldSortedNews = allNews.sort(
    (a, b) => Number(b.postDateEpoch) - Number(a.postDateEpoch)
  );
  const mostRecentNews = newToOldSortedNews.slice(0, 2);
  const olderNews = newToOldSortedNews.slice(-4);
  console.log(newToOldSortedNews, mostRecentNews, olderNews);
  return (
    <div className="LatestNews">
      {mostRecentNews.map((news) => (
        <div key={news.id}>recent news</div>
      ))}
      {olderNews.map((news) => (
        <div key={news.id}>older news</div>
      ))}
    </div>
  );
};
