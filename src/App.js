import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import SearchInput from './components/SearchInput';
import Grid from './components/Grid';
import Loader from './components/Loader';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [isLoadingEnabled, setIsLoadingEnabled] = useState(false);
  const regEx = /^([a-zA-Z0-9 ]+)$/;

  const handleSearch = (keyword) => {
    setArticles([]);
    fetchArticles(keyword);
  };

  const validateInput = (keyword) => {
    if (keyword === '') return setError('Please type a keyword');
    if (!regEx.test(keyword)) return setError('Keyword should include only letters, numbers and spaces');
    if (keyword.length > 39) {
      return setError('Keyword should be up to 40 symbols');
    } else {
      setIsLoadingEnabled(true);
      handleSearch(keyword);
    }
  };

  const fetchArticles = async (keyword) => {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const response = await fetch(`https://gnews.io/api/v4/search?q=${keyword}&max=9&token=${API_KEY}`);
      const data = await response.json();
      const fetchedArticles = data.articles;
      saveKeywordToDB(keyword);
      if (fetchedArticles.length === 0) return setError('No articles to show, try another keyword');
      setError('');
      setArticles(fetchedArticles);
    } catch (e) {
      setError(e);
    }
    setIsLoadingEnabled(false);
  };

  const saveKeywordToDB = async (keyword) => {
    try {
      const response = await fetch('/saveKeyword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.message);
      }
    } catch (e) {
      setError(e);
    }
  };

  const saveClick = async (detail) => {
    try {
      await fetch('/saveDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ detail }),
      });
    } catch (e) {
      setError(e);
    }
  };

  return (
    <Router>
      <div className="container">
        <div className="row mt-5">
          <h3 className="text-center">Search for articles on Google News</h3>
          <SearchInput validateInput={(keyword) => validateInput(keyword)} error={error} />
        </div>
        {isLoadingEnabled && <Loader />}
        <Grid articles={articles} saveClick={(detail) => saveClick(detail)} />
      </div>
    </Router>
  );
}

export default App;
