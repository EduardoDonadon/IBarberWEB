
import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { Login } from '../pages/Login';
import { ChooseProfile } from '../pages/ChooseProfile';
import { RegisterUserInfo } from '../pages/RegisterUserInfo';
import { RegisterUserAddress } from '../pages/RegisterUserAddress';

import { Home as HomeClient } from '../pages/client/Home';
import { ListSchedules } from '../pages/client/ListSchedules';
import { ListAppointments } from '../pages/client/ListAppointments';

import { Home as HomeBarber } from '../pages/barber/Home';
import { Profile as ProfileBarber } from '../pages/barber/Profile';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register/profile" component={ChooseProfile} />
    <Route path="/register/user" component={RegisterUserInfo} />
    <Route path="/register/address" component={RegisterUserAddress} />

    <Route path="/client/home" isPrivate component={HomeClient} />
    <Route path="/client/schedules" isPrivate component={ListSchedules} />
    <Route path="/client/appointments" isPrivate component={ListAppointments} />

    <Route path="/barber/home" isPrivate component={HomeBarber} />
    <Route path="/barber/profile" isPrivate component={ProfileBarber} />
  </Switch>
);
