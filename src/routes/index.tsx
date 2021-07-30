
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes'

import { useAuth } from '../hooks/auth';



export default function Routes() {

  const { isLogged } = useAuth();

  return (
    <BrowserRouter>
      {isLogged ? (<AppRoutes />) : (<AuthRoutes />) }
    </BrowserRouter>
  )
}