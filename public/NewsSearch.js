import React, { useState } from 'react';
import NewsList from 'NewsList';

const NewsSearch = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <NewsList articles={filteredArticles} />
    </div>
  );
};

export default NewsSearch;