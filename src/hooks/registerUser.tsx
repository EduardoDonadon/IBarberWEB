import React, { createContext, useCallback, useContext, useState } from 'react';

import { api } from '../services/api';

interface UserFormData {
  name: string;
  cpf: number;
  email: string;
  password: string;
  barber: boolean;
}

interface UserAddressData {
  street: string;
  neighborhood: string;
  state: string;
  city: string;
  cep: string;
  number: string;
  complement: string;
}

interface UserInfo extends UserFormData {
  address: UserAddressData;
}

interface RegisterUserContextData {
  user: UserInfo;
  addUserInfo(data: UserFormData): void;
  addUserAddress(data: UserAddressData): void;
  registerUser(): Promise<void>;
}

const RegisterUserContext = createContext<RegisterUserContextData>({} as RegisterUserContextData);

const RegisterUserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserInfo>({} as UserInfo);

  const addUserInfo = useCallback((data: UserFormData) => {
      setUser(state => ({...state, ...data}));
  }, []);

  const addUserAddress = useCallback((data: UserAddressData) => {
      setUser(state => ({...state, address: data}));
  }, []); 

  const registerUser = useCallback(async () => {
    console.log('data: ', user);

    api.post('/users', user).then(() => {
      setUser({} as UserInfo);
    });
  }, [user])

  return (
    <RegisterUserContext.Provider value={{ user, addUserInfo, addUserAddress, registerUser }}>
      {children}
    </RegisterUserContext.Provider>
  );
};

function useRegisterUser(): RegisterUserContextData {
  const context = useContext(RegisterUserContext);

  return context;
}

export { RegisterUserProvider, useRegisterUser };