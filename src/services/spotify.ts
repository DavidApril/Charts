import {spotifyApi} from '@/api/spotify.ts';
import {SpotifyTokens, SpotifyUserInfo} from '@/interfaces';
import axios from 'axios';

export class SpotifyService {
  /**
   * Logs in to the Spotify API using client credentials and retrieves the access tokens.
   * @returns {Promise<SpotifyTokens>} A promise that resolves to the Spotify access tokens.
   */
  static readonly login = async (): Promise<SpotifyTokens> => {
    const authHeader = btoa(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_SECRET_CLIENT_ID}`);
    const grant_type = 'client_credentials';
    const response: { data: SpotifyTokens } = await axios.post('https://accounts.spotify.com/api/token', {grant_type},
      {
        headers: {
          'Authorization': 'Basic ' + authHeader,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    return response.data;
  };

  /**
   * Retrieves the Spotify profile information for a given username.
   * @param {string} username - The Spotify username.
   * @returns {Promise<SpotifyUserInfo>} A promise that resolves to the Spotify user information.
   */
  static readonly getProfileByUser = async (username: string): Promise<SpotifyUserInfo> => {
    const response: { data: SpotifyUserInfo } = await spotifyApi.get(`/users/${username}`);
    return response.data;
  };
}
