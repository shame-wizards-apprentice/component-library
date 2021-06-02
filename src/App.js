import { GlobalStyle } from './utils';
import { Button } from './components/Button';

const App = () => {
  return (
    <main>
    <GlobalStyle />
    <Button>This is a primary button</Button>
    <br />
    <br />
    <Button variant='secondary' size='large'>
      This is a large secondary button
    </Button>
    <br />
    <br />
    <Button variant='tertiary' size='small'>
      This is a small tertiary button
    </Button>
  </main>
  );
};

export default App;
