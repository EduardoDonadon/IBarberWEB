import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { api } from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

import { ClientTopBar } from '../../../components/ClientTopBar';

import mockUpAvatar from '../../../assets/mockUpAvatar.png';

import {
  Container,
  Content,
  AppointmentsList,
  AppointmentItem,
  Empty
} from './styles';

interface AppointmentData {
  id: string;
  schedule: {
    date: string;
    formatted_date: string;
    hour: string;
    minutes: string;
    barber: {
      name: string;
      avatar_url: string;
    }
  }
}

export const ListAppointments: React.FC = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

  useEffect(() => {
    api.get<AppointmentData[]>(`/appointments/${user.id}`).then(response => {
      const appointmentsResponse = response.data;

      const appointmentsFormatted = appointmentsResponse.map((appointment) => {
        const date = new Date(appointment.schedule.date);

        const hour = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + (date.getMinutes())).slice(-2);

        const barber = appointment.schedule.barber;        

        return {
          ...appointment,
          schedule: {
            date: appointment.schedule.date,
            formatted_date: format(date, 'dd/MM/yyyy'),
            hour,
            minutes,
            barber
          }
        }
      })
      
      setAppointments(appointmentsFormatted);
    })
  }, [user.id])

  return (
    <Container>
      <ClientTopBar/>
      <Content>
        {appointments.length === 0 ? (
          <Empty>Sem agendamento feito</Empty>
        ) : (
          <AppointmentsList>
            {appointments.map(appointment => (
                <AppointmentItem key={appointment.id}>
                  <img
                    src={!!appointment.schedule.barber.avatar_url ?
                      appointment.schedule.barber.avatar_url :
                      mockUpAvatar
                    }
                    alt="avatar" />
                  <h1>{appointment.schedule.barber.name}</h1>
                  <div>
                    <h2>Dia: {appointment.schedule.formatted_date}</h2>
                    <h2>Horário: {appointment.schedule.hour}:{appointment.schedule.minutes}</h2>
                  </div>
                </AppointmentItem>
            ))}
          </AppointmentsList>
        )}
      </Content>
    </Container>
  );
}