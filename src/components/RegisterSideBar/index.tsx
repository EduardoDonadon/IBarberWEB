import React from 'react';

import logoImg from '../../assets/logo.png';

import {
  Container,
  ItemsContainer,
  Item,
  NumberWrapper,
} from './styles';

interface Props {
  tier: number;
}

export const RegisterSideBar: React.FC<Props> = ({ tier: activeTier }) => {
  return (
    <Container>
      <img src={logoImg} alt="logo" id="logo" />
      <ItemsContainer>
        <Item>
          <NumberWrapper tier={1} activeTier={activeTier}>
            <span>1</span>
          </NumberWrapper>
          <span>Perfil</span>
        </Item>
        <Item>
          <NumberWrapper tier={2} activeTier={activeTier}>
            <span>2</span>
          </NumberWrapper>
          <span>Login</span>
        </Item>
        <Item>
          <NumberWrapper tier={3} activeTier={activeTier}>
            <span>3</span>
          </NumberWrapper>
          <span>Endereço</span>
        </Item>
      </ItemsContainer>
    </Container>
  );
}