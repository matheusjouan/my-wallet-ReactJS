import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;
`;


interface TitleProps {
  lineColor: string;
}

export const Title = styled.h2<TitleProps>`
  color: ${props => props.theme.colors.white};

  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 6px;
    background: ${props => props.lineColor}
  }

  @media (max-width: 380px) {
    font-size: 20px;
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
`;