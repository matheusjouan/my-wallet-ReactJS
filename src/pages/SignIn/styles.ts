import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > h2 {
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
  }

  > img {
    width: 40px;
    height: 40px;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;

  padding: 30px;
  border-radius: 10px;

  background: ${props => props.theme.colors.tertiary};

`;

export const FormTitle = styled.h1`

  margin-bottom: 30px;

  &:after {
    content: '';
    display: block;
    width: 55px;
    height: 6px;
    background: ${props => props.theme.colors.warning};
  }
`; 