import styled, { keyframes } from 'styled-components';

const animateBox = keyframes`
  from {
    transform: translateX(100px);
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
  width: 48%;
  height: 260px;

  margin: 10px 0;
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-radius: 7px;

  display: flex;
  animation: ${animateBox} 0.3s;


  @media (max-width: 770px) {
    width: 100%;
  }


`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 770px) {
    padding: 0 15px 5px;
    margin-bottom: 7px;

    > h2 {
      margin-top: 15px;
      margin-bottom: 7px;
    }
  }

  @media (max-width: 440px) {
    padding: 15px;
    margin-bottom: 7px;

    > h2 {
      margin-top: 15px;
      margin-bottom: 7px;
    }
  }

`;

export const LegendContainer = styled.ul`
  list-style: none;

  @media (max-width: 770px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column
  }
`;

export const Legend = styled.li<LegendProps>`

display: flex;
align-items: center;

margin-bottom: 7px;
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


   @media (max-width: 770px) {
    font-size: 14px;
    margin: 3px 0;
  }

`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 770px) {
    height: 100%
  }
`;