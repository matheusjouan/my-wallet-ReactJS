import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

interface ContainerProps {
  menuIsOpen: boolean;
}

interface ThemeToogleProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  grid-area: AS;

  padding-left: 20px;
  background: ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.gray};


  position: relative;

  @media (max-width: 600px) {
    width: 170px;
    padding-left: 7px;
    position: fixed;
    z-index: 2;

    height: ${props => props.menuIsOpen ? '100vh' : '70px'};
    overflow: hidden;

    ${props => !props.menuIsOpen && css`
      border: none;
      border-bottom: 1px solid ${props => props.theme.colors.gray};

    ` }
    
  }
`;

export const Header =  styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;


export const LogImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;


export const MenuContainer = styled.nav`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled(Link)`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  margin: 7px 0;

  display: flex;
  align-items: center;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin-right: 10px;
    font-size: 18px;
  }
`;

export const MenuItemButton = styled.button`
  color: ${props => props.theme.colors.info};
  margin: 7px 0;

  display: flex;
  align-items: center;

  transition: opacity 0.3s;

  background: transparent;
  font-size: 16px;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin-right: 10px;
    font-size: 18px;
  }
`;

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;

  font-size: 22px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.warning};
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export const ThemeToggleFooter = styled.footer<ThemeToogleProps>`
  display: none;
  position: absolute;
  bottom: 30px;

  @media (max-width: 470px) {
    display: ${props =>  props.menuIsOpen ? 'flex' : 'none'}
  }
`;