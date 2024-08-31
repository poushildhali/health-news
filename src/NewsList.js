import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => (
  <div className="news-list">
    {articles.map(article => (
      <NewsItem key={article.url} article={article} />
    ))}
  </div>
);

export default NewsList;