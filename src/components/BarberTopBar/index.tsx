import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import logoIcon from '../../assets/logo.png';
import userIcon from '../../assets/user.svg';
import profileIcon from '../../assets/profile.svg';
import logoutIcon from '../../assets/logout.svg';

import {
  Container,
  LogoWrapper,
  UserName,
  IconsWrapper,
  IconContainer
} from './styles';

export const BarberTopBar: React.FC = () => {
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

        <IconContainer onClick={() => history.push('profile')}>
          <img src={profileIcon} alt="profile" />
        </IconContainer>

        <IconContainer onClick={signOut}>
          <img src={logoutIcon} alt="logout" />
        </IconContainer>
      </IconsWrapper> 
    </Container>
  );
}