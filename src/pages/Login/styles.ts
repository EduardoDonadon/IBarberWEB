import styled from 'styled-components';

import fundo from '../../assets/fundo.png'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: url(${fundo}) no-repeat center;

  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  background: #000000;
  height: 100%;
  width: 30%;
  padding: 24px 64px;
  position: relative;

  > img {
    width: 220px;
    height: 220px;
  }

  h1 {
    color: #f9f4e5;
    font-family: "Roboto", sans-serif;
    margin: 55px 0 50px;
    font-size: 36px;
  }

  p {
    color: #f9f4e5;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 28px;
    width: 300px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
  
  img {
    height: 400px;
  }
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15%;
  width: 40%;
  height: 330px;

  legend {
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    color: #f9f4e5;
    margin-bottom: 24px;
  }

  p {
    color: #f9f4e5;
    font-family: "Roboto", sans-serif;
  }

  a {
    color: #ffa200;
    text-decoration: none;
  }
`;
