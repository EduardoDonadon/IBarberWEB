import styled from 'styled-components';
import { shade } from 'polished';

import fundo from '../../assets/fundo.png'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: url(${fundo}) no-repeat center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const ChooseProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  width: 40%;
  height: auto;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: #F9F4E5;
    margin-bottom:  8px
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #F9F4E5;
  }
`;

export const ChooseButton = styled.button`
  width: 475px;

  display: flex;
  align-items: center;

  
  background: #f9f4e5;
  border: none;
  border-radius: 10px;
  margin: 20px 0;
  padding: 8px 24px;

  &:hover {
    background: ${shade(0.2, '#f9f4e5')};
  }

  img {
    height: 100px;
  } 
`;

export const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #D38600;
    margin-bottom:  8px
  }

  p {
    font-family: "Roboto", sans-serif;
    text-align: left;
    font-size: 18px;
    color: #D38600;
  }
`;
