import { createContext, useState, ReactNode, useCallback, useContext } from 'react';


interface AuthContextData {
  isLogged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}


const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

  const [isLogged, setIsLogged] = useState<boolean>(
    () => {
      const logged = localStorage.getItem('@my-wallet:logged');

      return !!logged;
    }
  );

  const signIn = useCallback((email, password) => {
    if(email === 'mj@hotmail.com' && password === '123') {
      localStorage.setItem('@my-wallet:logged', 'true');
      setIsLogged(true);
    } else {
      alert('Senha ou usuário inválidos!');
    }
  }, []);


  const signOut = useCallback(() => {
    localStorage.removeItem('@my-wallet:logged');
    setIsLogged(false);
  }, []);


  return (
    <AuthContext.Provider value={{ isLogged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
}