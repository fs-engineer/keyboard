import { ThemeProvider } from 'styled-components';
import { theme } from './assets';
import 'styled-components';
import { Laptop } from './components/Laptop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Laptop />
    </ThemeProvider>
  );
}

export default App;
