
import logoImg from '../../../assets/logo.svg'
import { 
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu
 } from 'react-icons/md';

import { 
   Container,
   Header,
   LogImg,
   Title,
   MenuContainer,
   MenuItemLink,
   MenuItemButton,
   ToggleMenu,
   ThemeToggleFooter 
  } from './styles'
import { useAuth } from '../../../hooks/auth';
import { useState } from 'react';
import { useTheme } from '../../../hooks/theme';
import { ToggleSwitch } from '../../ToggleSwitch';


export function Aside() {

  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true: false);


  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  return (
    <Container menuIsOpen={isMenuOpen}>
      <Header>

        <ToggleMenu onClick={handleToggleMenu}>
          {isMenuOpen ? <MdClose /> : <MdMenu /> }
        </ToggleMenu>

        <LogImg src={logoImg} alt="Minha carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink to="/dashboard">
        <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink to="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>

      </MenuContainer>

      <ThemeToggleFooter menuIsOpen={isMenuOpen}>
      <ToggleSwitch
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      </ThemeToggleFooter>
    </Container>
  )
}