import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;


export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    margin: 0 10px;

    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    background: none;
    opacity: 0.4;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    &.tag-filter-recurrent::after {
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      height: 6px;
      background: ${props => props.theme.colors.success};
    }

    &.tag-filter-eventual::after {
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      height: 6px;
      background: ${props => props.theme.colors.warning};
    }

    &.tag-actived {
      opacity: 1;
    }
  }
`;
