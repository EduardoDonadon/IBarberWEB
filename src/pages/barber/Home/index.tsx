import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { api } from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

import { BarberTopBar } from '../../../components/BarberTopBar';

import {
  Container,
  Content,
  ListContainer,
  ListWrapper,
  ListItem
} from './styles';

interface ScheduleData {
  id: string;
  available: boolean;
  date: string;
  formatted_date: string;
  hour: string;
  minutes: string;
}

export const Home: React.FC = () => {
  const { user } = useAuth();
  const [unavailableSchedules, setUnavailableSchedules] = useState<ScheduleData[]>([]);
  const [availableSchedules, setAvailableSchedules] = useState<ScheduleData[]>([]);

  useEffect(() => {
    api.get<ScheduleData[]>(`/schedules/${user.id}`).then(response => {
      const schedulesResponse = response.data;

      const schedulesFormatted = schedulesResponse.map((schedule) => {
        const date = new Date(schedule.date);
        
        const hour = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + (date.getMinutes())).slice(-2);

        return {
          ...schedule,
          formatted_date: format(date, 'dd/MM/yyyy'),
          hour,
          minutes
        }
      })

      const schedulesUnavailable = schedulesFormatted.filter(schedule => schedule.available === false);
      const schedulesAvailable = schedulesFormatted.filter((schedule: ScheduleData) => schedule.available === true);

      setUnavailableSchedules(schedulesUnavailable);
      setAvailableSchedules(schedulesAvailable);
    })
  }, [user.id])

  return (
    <Container>
      <BarberTopBar/>
      <Content>
        <ListContainer>
          <h1>Disponivel</h1>
          <ListWrapper>
            {availableSchedules.map(schedule => (
              <ListItem key={schedule.id}>
                <div>
                  <h2>Dia: {schedule.formatted_date}</h2>
                  <h2>Horário: {schedule.hour}:{schedule.minutes}</h2>
                </div>
              </ListItem>
            ))}
          </ListWrapper>
        </ListContainer>
        <ListContainer>
          <h1>Agendados</h1>
          <ListWrapper>
            {unavailableSchedules.map(schedule => (
              <ListItem key={schedule.id}>
                <div>
                  <h2>Dia: {schedule.formatted_date}</h2>
                  <h2>Horário: {schedule.hour}:{schedule.minutes}</h2>
                </div>
              </ListItem>
            ))}
          </ListWrapper>
        </ListContainer>
      </Content>
    </Container>
  );
}