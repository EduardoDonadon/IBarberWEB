import React, {useState, useEffect} from 'react';

import { api } from '../../../services/api';

import { ClientTopBar } from '../../../components/ClientTopBar';
import { BarberCard, BarberData } from '../../../components/BarberCard';

import {
  Container,
  Content,
  BarberListContainer
} from './styles';

export const Home: React.FC = () => {
  const [barbers, setBarbers] = useState<BarberData[]>([]);


  useEffect(() => {
    api.get<BarberData[]>('users/barbers').then(response => {
      setBarbers(response.data);
    })
  }, [])

  return (
    <Container>
      <ClientTopBar/>
      <Content>
        <h1>Barbeiros:</h1>
        <BarberListContainer>
          {barbers.map(barber => (
            <BarberCard key={barber.id} data={barber}/>
          ))}
        </BarberListContainer>
      </Content>
    </Container>
  );
}