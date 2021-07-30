import styled, { keyframes } from 'styled-components';

const animateBox = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

interface LegendProps {
  color: string;
}


export const Container = styled.div`
  width: 100%;

  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;

  animation: ${animateBox} 0.5s;

  .line-chart {
    @media (max-width: 1280px) {
      margin-left: 0;
      margin-top: 10px;
    }
  }

`;


export const CharContainer = styled.div`
    height: 260px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }

  @media (max-width: 1280px) {
    flex-direction: column;

    > h2 {
      padding-left: 0;
    }
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 20px;
  
`;

export const Legend = styled.li<LegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  margin-left: 20px;
  font-size: 16px;

  > div {
    background: ${props => props.color};
    width: 45px;
    height: 45px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 45px;
    text-align: center;
   }

  > span {
    margin-left: 5px;
  }

  @media (max-width: 1280px) {
    margin-left: 0;
  }

  & + li { 
    @media (max-width: 1280px) {
      margin-left: 16px;
    }
  }


`;