import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar';
import * as API from 'services/api';

export const Movies = () => {
  // const { movieId } = useParams();
  const [keyWord, setKeyWord] = useState('');
  const [movies, setMovies] = useState([]);

  function handleFormSubmit({ query }) {
    if (!query.trim().toLowerCase()) {
      return;
    }
    setKeyWord(query);
  }

  useEffect(() => {
    if (!keyWord) {
      return;
    }
    async function fetchAssetsByKeyWord(keyWord) {
      try {
        const data = await API.getMovieKeyWord(keyWord);
        console.log('data', data);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssetsByKeyWord(keyWord);
  }, [keyWord]);

  console.log('movies', movies);

  return (
    <>
      <Searchbar onFormSubmit={handleFormSubmit} />
      <Outlet />
    </>
  );
};

// toast.warn('Please let us know your query item');
