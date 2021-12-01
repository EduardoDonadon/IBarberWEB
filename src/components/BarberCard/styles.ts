import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  width: 400px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }
`;

export const BarberInfoContainer = styled.div`
  padding-left: 12px;
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    font-weight: bold;
    color: #fff;

  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    color: #fff;
  }

  > span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #fff;

    overflow: hidden;
  }
`;
