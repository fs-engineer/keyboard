import Keyboard from './components/Keyboard/Keyboard';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import TrainingWindow from './components/TrainingWindow/TrainingWindow';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TrainingWindow />
      <Keyboard />
    </ThemeProvider>
  );
}

export default App;
