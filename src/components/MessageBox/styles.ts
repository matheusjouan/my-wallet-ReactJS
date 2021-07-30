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

export const Container = styled.div`
  width: 48%;
  height: 260px;
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-radius: 7px;
  
  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${animateBox} 0.5s;

  > header {
    img {
      width: 35px;
      margin-left: 8px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 770px) {
    width: 100%;

    > header {
      h1 {
        font-size: 24px;

        img {
          width: 20px;
          height: 20px;
        }
      }

      p {
        font-size: 14px
      }
    }

    > footer {
      span {
        font-size: 14px
      }
    }
  }


  @media (max-width: 420px) {
    width: 100%;
    height: auto;

    > header {
     p {
       margin-bottom: 15px;
     }
    }
  }
`;
