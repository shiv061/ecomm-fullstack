import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { Navigator } from './Navigator';
import { SnackbarProvider } from 'baseui/snackbar';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SnackbarProvider>
          <Navigator />
        </SnackbarProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
