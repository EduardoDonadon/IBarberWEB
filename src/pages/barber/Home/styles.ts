import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  padding: 48px 96px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & + div {
    margin-top: 48px;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    color: #000;
    margin-bottom: 18px;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  grid-gap: 16px;
`;

export const ListItem = styled.div`
  background-color: #ffa200;
  padding: 16px;
  border-radius: 16px;
  width: 600px;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    color: #f9f4e5;
  }
`;
