import './App.css';
import {Navbar} from '@/components/navigation/navigation.tsx';
import {ThemeProvider} from '@/provider/theme.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className={'w-4/5 mx-auto'}>
        <Navbar/>
      </main>
    </ThemeProvider>
  );
}

export default App;
