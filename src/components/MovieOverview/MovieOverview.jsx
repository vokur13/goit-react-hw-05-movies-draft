import { format } from 'date-fns';
import { Box } from 'components/Box';
import { GenreList, GenreItem } from './MovieOverview.styled';

export const MovieOverview = ({ movie }) => {
  const releaseDate = format(new Date(movie.release_date), 'yyyy');

  return (
    <>
      <Box display="grid" gridTemplateColumns="1fr 5fr">
        <Box>
          <img
            // src={'http://image.tmdb.org/t/p/w780${movie.poster_path'}
            // src="https://image.tmdb.org/t/p/original/{movie.poster_path}"
            alt={movie.title}
          ></img>
        </Box>
        <Box display="grid" gridTemplateRows="auto">
          <h2>
            {movie.title} ({releaseDate})
          </h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <GenreList>
            {movie.genres.map(genre => (
              <GenreItem key={genre.name}>{genre.name}</GenreItem>
            ))}
          </GenreList>
        </Box>
      </Box>
    </>
  );
};
