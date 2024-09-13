import './App.css';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

function App() {

  return (<main>
    <Alert variant={ 'destructive' }>
      <Terminal className="h-4 w-4"/>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>

  </main>);
}

export default App;
