import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  margin: 7px 0;
  padding: 10px;
  font-weight: bold;

  background: ${props => props.theme.colors.warning};
  color: ${props => props.theme.colors.white};

  border-radius: 5px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
  
`;
