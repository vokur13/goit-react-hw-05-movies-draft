import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import * as API from 'services/api';
import { MovieOverview } from 'components/MovieOverview';
import { NavItem } from './MovieDetails.styled';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    async function fetchAssetsByID(movieId) {
      try {
        const data = await API.getMovieByID(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssetsByID(movieId);
  }, [movieId]);

  return (
    <Box>
      <NavLink to={`/`}>Go back</NavLink>
      {movie ? <MovieOverview movie={movie} /> : null}
      <Box mb={3}>Additional information</Box>
      <Box as="ul" display="flex" flexDirection="column">
        {navItems.map(({ href, text }) => (
          <NavItem key={href} to={href}>
            {text}
          </NavItem>
        ))}
      </Box>
      <Outlet />
    </Box>
  );
};
