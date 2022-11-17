import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { List, Item } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchCredits(movieId) {
      try {
        const { cast } = await API.getMovieCredits(movieId);
        setCredits(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCredits(movieId);
  }, [movieId]);

  return (
    <>
      {/* <div>Now showing movie with id - {movieId}</div> */}
      {credits ? (
        <List>
          {credits.map(item => (
            <Item key={item.credit_id}>
              <img
                // src={'http://image.tmdb.org/t/p/w780${movie.poster_path'}
                src="https://image.tmdb.org/t/p/original/{item.profile_path}"
                alt={item.name}
              ></img>
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </Item>
          ))}
        </List>
      ) : null}
    </>
  );
};
