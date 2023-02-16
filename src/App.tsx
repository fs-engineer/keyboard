import Keyboard from './components/Keyboard/Keyboard';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets';
import TrainingWindow from './components/TrainingWindow/TrainingWindow';
import 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TrainingWindow />
      <Keyboard />
    </ThemeProvider>
  );
}

export default App;
