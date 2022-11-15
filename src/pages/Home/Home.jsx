import { useEffect, useState } from 'react';
import * as API from 'services/api';
import { markupTrendingToday } from 'templates/markupTrendingToday';

export const Home = () => {
  const [trendingToday, setTrandingToday] = useState([]);
  useEffect(() => {
    async function fetchAssets() {
      try {
        const { results } = await API.getMovie();
        results.map(item => console.log(item.title));
        console.log(markupTrendingToday(results));
        // return (refs.trend.innerHTML = await markupGallery(results));
        // console.log(results[0].original_title);
        // setTrandingToday(results);
        // console.log('trendingToday', trendingToday);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssets();
  }, [trendingToday]);

  return <div>Trending today</div>;
};
