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
  flex-direction: column;
  align-items: center;
`;

export const CutsContainer = styled.div`
  margin: 32px 96px;
  width: 1200px;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    color: #fff;
  }
`;

export const CutsWrapper = styled.div`
  display: grid;
  align-items: center;  
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  height: 300px;
  margin-top: 12px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #c1c1c1; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #ffa200; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  img {
    border-radius: 8px;
    padding-bottom: 8px;
    width: 200px;
    height: 200px;
  }
`;

export const SchedulesContainer = styled.div`
  margin: 32px 96px;
  width: 1200px;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    color: #fff;
  }
`;

export const SchedulesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  margin-top: 12px;
`;

export const ScheduleItem = styled.div`
  background-color: #ffa200;
  padding: 6px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    color: #f9f4e5;
  }

  span {
    font-size: 24px;
  }
`;

export const Empty = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  color: #ffa200;
  margin-top: 48px;
`;