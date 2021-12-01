import styled from 'styled-components';

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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15%;
  width: 40%;
  height: auto;
`;