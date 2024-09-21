import {OwnerCard, ChartArea, ProfileSpotifyCard, RepositoriesCarousel, Navbar} from '@/components';
import {GithubUser} from '@/interfaces';
import {ThemeProvider} from '@/provider';
import {SpotifyService, GithubService} from '@/services';
import {useEffect, useState} from 'react';

import './App.css';

function App() {

  const [githubUser, setGithubUser] = useState<GithubUser>();

  useEffect(() => {
    SpotifyService.login()
      .then(r => localStorage.setItem('spotify_access_token', r.access_token))
      .catch(e => console.error({e}));
  }, [SpotifyService]);

  useEffect(() => {
    GithubService.getUser()
      .then(r => setGithubUser(r));
  }, [GithubService]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className={'w-4/5 mx-auto flex flex-col gap-3 my-3'}>
        <Navbar/>
        <div className={'grid grid-cols-4'}>
          <OwnerCard className={'col-span-3'} githubUser={githubUser}/>
          <ProfileSpotifyCard/>
        </div>
        <RepositoriesCarousel/>
        <ChartArea/>
      </main>
    </ThemeProvider>
  );
}

export default App;
