import React, { ChangeEvent, useCallback, useState, useEffect } from 'react';
import { FiCamera, FiFilePlus } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { useAuth } from '../../../hooks/auth';
import { useToast } from '../../../hooks/toast';
import { api } from '../../../services/api';

import { BarberTopBar } from '../../../components/BarberTopBar';
import { Button } from '../../../components/Button';

import headerImage from '../../../assets/headerImage.svg';
import mockUpAvatar from '../../../assets/mockUpAvatar.png';

import {
  Container,
  HeaderImage,
  AvatarInput,
  Content,
  UserContainer,
  UserInfo,
  Calendar,
  TimePicker,
  CutsContainer,
  CutsWrapper,
  AddCutWrapper
} from './styles';

interface CutData {
  id: string;
  cut_photo_url: string;
}

export const Profile: React.FC = () => {
  const { user, updateUser } = useAuth(); 
  const { addToast } = useToast();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("09:00:00");
  const [cuts, setCuts] = useState<CutData[]>([]);
  const [createSchedule, setCreateSchedule] = useState(false);
  
  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);
  
  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);
        });
      }
    },
    [updateUser],
  );

  const handleAddCut = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('cut_photo', e.target.files[0]);

        api.post<CutData>('/cuts', data).then(response => {
          setCuts(state => [...state, response.data]);
        }).then(() => {
          addToast({title: "Corte adicionado."})
        });
      }
    },
    [addToast],
  );

  const handleAddSchedule = useCallback(() => {
    setCreateSchedule(true);
    const date = selectedDate;
    const timeSplitted = time.split(":"); 

    const hour = Number(timeSplitted[0]);
    const minutes = Number(timeSplitted[1]);    

    date.setHours(hour);
    date.setMinutes(minutes);
    
    api.post('schedules', {
      barber_id: user.id,
      date
    }).then(() => {
      addToast({title: "Horario adicionado."})
    }).finally(() => {
      setCreateSchedule(false);
    });
    
  }, [selectedDate, time, user.id, addToast])

  useEffect(() => {
    api.get<CutData[]>(`cuts/${user.id}`).then(response => {
      setCuts(response.data);
    })
  }, [user.id])

  return (
    <Container>
      <BarberTopBar/>
      <HeaderImage>
        <img src={headerImage} alt="header" />
      </HeaderImage>
      <Content>
        <UserContainer>
          <UserInfo>
            <AvatarInput>
              <img src={!!user.avatar_url ? user.avatar_url : mockUpAvatar} alt={user.name} />
              <label htmlFor="avatar">
                <FiCamera />
                <input type="file" id="avatar" onChange={handleAvatarChange} />
              </label>
            </AvatarInput>
            <div>
              <h2>{user.name}</h2>
              <h3>Lauro de Freitas - BA</h3>
              <span>
                Sou barbeiro desde 2017, apaixonado
                em cortes de cabelo desde meus 14 anos.
              </span>
            </div>
          </UserInfo>
          <Calendar>
            <h1>Horarios</h1>
            <div>
              <DayPicker
                modifiers={{
                  available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
                }}
                selectedDays={selectedDate}
                onDayClick={handleDateChange}
                fromMonth={new Date()}
                weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                months={[
                  'Janeiro',
                  'Fevereiro',
                  'Março',
                  'Abril',
                  'Maio',
                  'Junho',
                  'Julho',
                  'Agosto',
                  'Setembro',
                  'Outubro',
                  'Novembro',
                  'Dezembro',
                ]}
              />
              <TimePicker>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <Button
                  text="Criar horario"
                  loading={createSchedule}
                  onClick={handleAddSchedule}
                />
              </TimePicker>
            </div>
          </Calendar>
        </UserContainer>
        <CutsContainer>
          <h1>Portfólio:</h1>
          <CutsWrapper>
            {cuts.map(cut => (
              <img key={cut.id} src={cut.cut_photo_url} alt="corte" />
            ))}

            <AddCutWrapper htmlFor="cutInput">
              <input type="file" id="cutInput" onChange={handleAddCut}/>
              <FiFilePlus size={50} color="#FFA200"/>
            </AddCutWrapper>
          </CutsWrapper>
        </CutsContainer>
      </Content>
    </Container>
  );
}