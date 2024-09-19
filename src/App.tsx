import './App.css';
import {Navbar} from '@/components/navigation/navigation.tsx';
import {ThemeProvider} from '@/provider/theme.tsx';
import {ChartArea} from '@/components/charts/area.tsx';
import {OwnerCard} from '@/components/cards/owner.tsx';

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className={'w-4/5 mx-auto flex flex-col gap-3 my-3'}>
        <Navbar/>
        <OwnerCard/>
        <ChartArea/>
      </main>
    </ThemeProvider>
  );
}

export default App;
