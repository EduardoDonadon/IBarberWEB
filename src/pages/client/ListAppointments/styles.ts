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
  display: flex;
  justify-content: center;
`;

export const AppointmentsList = styled.div`
  margin: 96px 96px 32px;
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 56px;
`;

export const AppointmentItem = styled.div`
  width: 280px;
  height: 260px;
  border-radius: 8px;
  background-color: #F9F4E5;
  position: relative;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 116px;
    width: 116px;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: -36px;
    transform: translateX(-58px);
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    color: #000;
    margin-bottom: 8px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    color: #FFA200;
    text-align: center;
  }
`;

export const Empty = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  color: #ffa200;
  margin-top: 48px;
`;