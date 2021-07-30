import styled from 'styled-components';

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

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;


export const SideLeft = styled.div`
    padding: 30px 20px;
    flex: 1;

    > h2 {
      padding-left: 16px;
      margin-bottom: 10px;
    }

`;


export const SideRight = styled.div`
  flex: 1;
  min-height: 150px;

  display: flex;
  justify-content: center;

  padding-top: 35px;
`; 


export const LegendContainer = styled.ul`
  list-style: none;

  @media (max-width: 1200px) {
    display: flex;
    height: auto;
  }
`;

export const Legend = styled.li<LegendProps>`

display: flex;
align-items: center;

padding-left: 16px;
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

`;