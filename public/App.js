
import React, { useEffect, useState } from 'react';
import NewsList from 'NewsList';
import NewsSearch from 'NewsSearch';
import 'index.css';


import React from 'react';

const apiKey = '6d61c2967db94a98a5d846a8f9ea20a7';  // Replace with your actual API key

function App() {
  return (
    <div className="App">
      <h1>Health News</h1>
      {/* Your other components here */}
    </div>
  );
}

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('health');

  const fetchNews = (category) => {
    const url = https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey};
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching the news:', error));
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <div className="container">
      <h1>Health News</h1>
      <div className="tabs">
        <button onClick={() => setCategory('health')}>Health</button>
        <button onClick={() => setCategory('science')}>Science</button>
        <button onClick={() => setCategory('technology')}>Technology</button>
      </div>
      <NewsSearch articles={articles} />
    </div>
  );
}


export default App;