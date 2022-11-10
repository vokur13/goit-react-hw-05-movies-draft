import { Routes, Route } from 'react-router-dom';
import Home from 'path/to/pages/Home';
import Movies from 'path/to/pages/Movies';
import MovieDetails from 'path/to/pages/MovieDetails';
import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
        {/* <Route path="//movies/:movieId" element={<MovieDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
