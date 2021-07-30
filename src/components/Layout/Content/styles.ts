import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;

  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};

  padding: 25px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  // largura do scroll
  ::-webkit-scrollbar {
    width: 10px;
  }

  // Botão de rolagem
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }

  // Barra maior que envolve a rolagem
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.tertiary};
  }
`;
