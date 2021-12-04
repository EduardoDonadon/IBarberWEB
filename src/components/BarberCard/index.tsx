import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../Button';

import mockUpAvatar from '../../assets/mockUpAvatar.png';

import {
  Container,
  Avatar,
  BarberInfoContainer
} from './styles';

export interface BarberData {
  id: string;
  name: string;
  avatar_url: string;
  address: {
    city: string;
    state: string;
  }
}

interface Props {
  data: BarberData
}

export const BarberCard: React.FC<Props> = ({ data }) => {
  const history = useHistory();

  const handleChooseButton = useCallback(() => {
    history.push({
      pathname: '/client/schedules',
      state: {userId: data.id},
    });
  },[history, data.id])

  return (
    <Container>
      <Avatar>
        <img src={data.avatar_url ? data.avatar_url : mockUpAvatar} alt="barber" />
      </Avatar>
      <BarberInfoContainer>
        <h2>{data.name}</h2>
        <h3>{data.address.city} - {data.address.state}</h3>
        <Button text="Escolher" onClick={handleChooseButton}/>
      </BarberInfoContainer>
    </Container>
  );
}