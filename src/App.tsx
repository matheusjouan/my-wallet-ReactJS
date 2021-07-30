import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/theme';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  
  const { theme } = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
