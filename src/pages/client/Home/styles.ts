import styled from 'styled-components';

import insideBackground from '../../../assets/insideBackground.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${insideBackground}) center;
`;

export const Content = styled.div`
  flex: 1;
  margin: 48px 96px;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    margin: 0 0 16px 8px;
  }
`;

export const BarberListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 48px;
  grid-column-gap: 16px;
`;