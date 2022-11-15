import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'e1d2d59faab8416a91a95646b10aa32e';

const searchParams = new URLSearchParams({
  api_key: API_KEY,
});

export const getMovie = async () => {
  const { data } = await axios.get(`/trending/movie/day?${searchParams}`);
  return data;
};

// const api_movie =
//   'https://api.themoviedb.org/3/trending/movie/day?api_key=e1d2d59faab8416a91a95646b10aa32e';
