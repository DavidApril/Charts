import axios from 'axios';

const spotifyApi = axios.create({
  baseURL: `${import.meta.env.VITE_SPOTIFY_API_URL}/${import.meta.env.VITE_SPOTIFY_API_PREFIX}`,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  }
});

spotifyApi.interceptors.request.use(config => {
  const token = localStorage.getItem('spotify_access_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export {spotifyApi};
