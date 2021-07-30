import { ReactNode, useCallback } from 'react';
import { useContext } from 'react';
import { createContext, useState } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeProps {
  title: string,

  colors: {
    primary: string,
    secondary: string,
    tertiary: string,

    white: string,     
    black: string,
    gray: string,

    success: string,
    info: string,
    warning: string,
  },
}

interface ThemeContextData {
  toggleTheme(): void;
  theme: ThemeProps;
}

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  // Inicia com o theme salvo no localstorage p/ caso atualizar a página
  const [theme, setTheme] = useState<ThemeProps>(() => {
      const themeSaved = localStorage.getItem('@my-wallet:theme');

      if (themeSaved) {
        return JSON.parse(themeSaved);
      } else {
        return dark;
      }
    }
  );

  // Função de Troca de Themes
  const toggleTheme = useCallback(() => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@my-wallet:theme', JSON.stringify(light));
    } else {
      setTheme(dark)
      localStorage.setItem('@my-wallet:theme', JSON.stringify(dark));
    }
  },[theme.title])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
}