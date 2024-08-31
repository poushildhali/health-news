import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import './index.css';

const apiKey = '6d61c2967db94a98a5d846a8f9ea20a7';  //actual API key
const url = 'https://newsapi.org/v2/top-headlines?category=health&apiKey=${apiKey}';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching the news:', error));
  }, []);

  return (
    <div className="container">
      <h1>Health News</h1>
      <NewsList articles={articles} />
    </div>
  );
}

export default App;