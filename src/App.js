import Keyboard from './components/Keyboard/Keyboard';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Keyboard />
    </ThemeProvider>
  );
}

export default App;
