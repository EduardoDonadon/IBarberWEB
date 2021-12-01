import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { format } from 'date-fns';

import { api } from '../../../services/api';
import { useAuth } from '../../../hooks/auth';
import { useToast } from '../../../hooks/toast';

import { ClientTopBar } from '../../../components/ClientTopBar';
import { Button } from '../../../components/Button';

import {
  Container,
  Content,
  CutsContainer,
  CutsWrapper,
  SchedulesContainer,
  SchedulesList,
  ScheduleItem,
  Empty
} from './styles';

interface LocationProps {
  userId: string;
}

interface ScheduleData {
  id: string;
  date: string;
  available: boolean;
  barber_id: string;
  formatted_date: string;
  hour: string;
  minutes: string;
}

interface CutData {
  id: string;
  cut_photo_url: string;
}

export const ListSchedules: React.FC = () => {
  const { user } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const location = useLocation<LocationProps>();
  const [schedules, setSchedules] = useState<ScheduleData[]>([]);
  const [cuts, setCuts] = useState<CutData[]>([]);

  const handleCreateAppointment = useCallback(async (scheduleId: string) => {
    await api.post('appointments', {
      client_id: user.id,
      schedule_id: scheduleId
    })

    addToast({title: "Agendamento realizado."})

    history.push('appointments');
  }, [user.id, addToast, history])

  useEffect(() => {
    api.get<ScheduleData[]>(`/schedules/${location.state.userId}`).then(response => {
      const schedulesResponse = response.data;

      const schedulesAvailable = schedulesResponse.filter((schedule: ScheduleData) => schedule.available === true);

      const schedulesFormatted = schedulesAvailable.map((schedule) => {
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

      setSchedules(schedulesFormatted);
    })

    api.get<CutData[]>(`cuts/${location.state.userId}`).then(response => {
      setCuts(response.data);
    })

  }, [location.state.userId])

  return (
    <Container>
      <ClientTopBar/>
      <Content>
        <CutsContainer>
          <h1>Portfólio:</h1>
          <CutsWrapper>
            {cuts.map(cut => (
              <img key={cut.id} src={cut.cut_photo_url} alt="corte" />
            ))}
          </CutsWrapper>
        </CutsContainer>
        {schedules.length === 0 ? (
          <Empty>Sem horário disponivel</Empty>
        ) : (
          <SchedulesContainer>
            <h1>Horários:</h1>
            <SchedulesList>
              {schedules.map(schedule => (
                  <ScheduleItem key={schedule.id}>
                    <div>
                      <h2>Dia: {schedule.formatted_date}</h2>
                      <h2>Horário: {schedule.hour}:{schedule.minutes}</h2>
                    </div>
                    <Button text="Marcar" onClick={() => handleCreateAppointment(schedule.id)}/>
                  </ScheduleItem>
              ))}
            </SchedulesList>
          </SchedulesContainer>
        )}
      </Content>
    </Container>
  );
}