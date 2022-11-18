import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar';
import * as API from 'services/api';
import { List, Item, NavItem } from './Movies.styled';

export const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [keyWord, setKeyWord] = useState('');
  const [movies, setMovies] = useState([]);

  console.log('search param query', query);

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
        const { results } = await API.getMovieKeyWord(keyWord);
        setMovies(results);
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
      {movies.length > 0 ? (
        <List>
          {movies.map(({ id, title }) => (
            <Item key={id}>
              <NavItem to={`/${id}`}>{title}</NavItem>
            </Item>
          ))}
        </List>
      ) : null}

      <Outlet />
    </>
  );
};

// toast.warn('Please let us know your query item');
