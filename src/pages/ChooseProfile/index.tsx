import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { RegisterSideBar } from '../../components/RegisterSideBar';

import scissorsImg from '../../assets/scissors.svg';
import userImg from '../../assets/user.svg';

import {
  Container,
  Content,
  ChooseProfileContainer,
  ChooseButton,
  ButtonTextWrapper,
} from './styles';

export const ChooseProfile: React.FC = () => {
  const history = useHistory();
  
  const handleChooseBarber = useCallback(() => {
    history.push({
      pathname: '/register/user',
      state: {barber: true},
    });
  }, [history])
  
  const handleChooseClient = useCallback(() => {
    history.push({
      pathname: '/register/user',
      state: {barber: false},
    });
  }, [history])

  return (
    <Container>
      <RegisterSideBar
        tier={1}
      />
      <Content>
        <ChooseProfileContainer>
          <h1>Escolha seu perfil</h1>
          <p>
            Para começar, escolha se você está<br/>
            em busca de um barbeiro para ficar no estilo<br/>
            ou atrás de clientes para aumentar sua renda. 
          </p>

          <ChooseButton type="button">
            <img src={scissorsImg} alt="scissors"/>
            <ButtonTextWrapper
              onClick={handleChooseBarber}
            >
              <h1>Barbeiro</h1>
              <p>Para você que ta em busca de clientes.</p>
            </ButtonTextWrapper>
          </ChooseButton>

          <ChooseButton type="button">
            <img src={userImg} alt="user"/>
            <ButtonTextWrapper
              onClick={handleChooseClient}
            >
              <h1>Cliente</h1>
              <p>Para você que quer ficar bonitoe ter um SEXTOU de qualidade.</p>
            </ButtonTextWrapper>
          </ChooseButton>

        </ChooseProfileContainer>
      </Content>
    </Container>
  );
}