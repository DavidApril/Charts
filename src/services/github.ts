import {GithubUser} from '@/interfaces';
import {Octokit} from '@octokit/core';

/**
 * Service class to interact with GitHub API.
 */
export class GithubService {
  /**
   * Fetches the authenticated user's details from GitHub.
   *
   * @returns {Promise<GithubUser>} The authenticated user's details.
   */
  static readonly getUser = async (): Promise<GithubUser> => {
    const octokit = new Octokit({auth: import.meta.env.VITE_GITHUB_ACCESS_TOKEN});
    const user = await octokit.request('GET /user', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    return user.data;
  };
}
