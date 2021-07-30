import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './hooks/theme';
import { AuthContextProvider } from './hooks/auth';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

