import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { TrendList } from 'components/TrendList';

export const Home = () => {
  const [value, setValue] = useState([]);
  const [movieId, setMovieID] = useState('');
  useEffect(() => {
    async function fetchAssets() {
      try {
        const { results } = await API.getMovie();
        setValue(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssets();
  }, []);

  function onSelect(data) {
    setMovieID(data);
    console.log(movieId);
  }

  return (
    <>
      <h1>Trending today</h1>
      <TrendList data={value} onSelect={onSelect} />
    </>
  );
};
