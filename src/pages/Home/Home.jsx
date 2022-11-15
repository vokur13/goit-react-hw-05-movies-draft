import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { TrendList } from 'components/TrendList';

export const Home = () => {
  const [value, setValue] = useState([]);
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

  function onSelect() {
    console.log('onSelect Pressed');
  }

  return (
    <>
      <h1>Trending today</h1>
      <TrendList data={value} onSelect={onSelect} />
    </>
  );
};
