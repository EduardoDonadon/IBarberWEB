import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import logoIcon from '../../assets/logo.png';
import userIcon from '../../assets/user.svg';
import calendarIcon from '../../assets/calendar.svg';
import logoutIcon from '../../assets/logout.svg';

import {
  Container,
  LogoWrapper,
  UserName,
  IconsWrapper,
  IconContainer
} from './styles';

export const ClientTopBar: React.FC = () => {
  const { signOut, user } = useAuth();
  const history = useHistory();

  return (
    <Container>
      <LogoWrapper>
          <img src={logoIcon} alt="IBarber" />
      </LogoWrapper>
      <UserName>{user.name}</UserName>
      <IconsWrapper>
        <IconContainer onClick={() => history.push('home')}>
          <img src={userIcon} alt="home" />
        </IconContainer>

        <IconContainer onClick={() => history.push('appointments')}>
          <img src={calendarIcon} alt="appoitments" />
        </IconContainer>

        <IconContainer onClick={signOut}>
          <img src={logoutIcon} alt="logout" />
        </IconContainer>
      </IconsWrapper> 
    </Container>
  );
}