import styled from 'styled-components';

export const Container = styled.div`

  & + div {
    margin-left: 10px;
  }
  
  > select {
    padding: 7px 10px;
    border-radius: 5px;
  }

`;
