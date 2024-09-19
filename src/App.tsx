import {Navbar, OwnerCard, ChartArea, ProfileSpotifyCard} from '@/components';
import {ThemeProvider} from '@/provider';

import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className={'w-4/5 mx-auto flex flex-col gap-3 my-3'}>
        <Navbar/>
        <div className={'grid grid-cols-3 gap-3'}>
          <div className={'col-span-2'}>
            <OwnerCard/>
          </div>
          <ProfileSpotifyCard/>
        </div>
        <ChartArea/>
      </main>
    </ThemeProvider>
  );
}

export default App;
