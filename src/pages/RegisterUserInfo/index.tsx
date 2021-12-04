import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import { useRegisterUser } from '../../hooks/registerUser';

import { RegisterSideBar } from '../../components/RegisterSideBar';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Content,
  FormContainer
} from './styles';


interface LocationProps {
  barber: boolean;
}

interface UserFormData {
  name: string;
  cpf: string;
  email: string;
  email_confirm?: string;
  password: string;
  password_confirm?: string;
  barber: boolean;
}

export const RegisterUserInfo: React.FC = () => {
  const { addToast } = useToast();
  const { addUserInfo } = useRegisterUser();
  const formRef = useRef<FormHandles>(null);
  const location = useLocation<LocationProps>();
  const history = useHistory();

  const handleSubmit = useCallback( async (data: UserFormData) => {
      try {        
        const schema = Yup.object().shape({
          name: Yup.string().required('Senha obrigatória'),
          cpf: Yup.number().required('CPF obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          email_confirm: Yup.string().oneOf(
            [Yup.ref('email')],
            'Os emails tem quer ser iguais.',
          ),
          password: Yup.string().required('Senha obrigatória'),
          password_confirm: Yup.string().oneOf(
            [Yup.ref('password')],
            'As senhas tem quer ser iguais.',
          ),
        });
        
        await schema.validate(data, {
          abortEarly: false,
        });
        
        data.barber = location.state.barber;

        delete data.email_confirm;
        delete data.password_confirm;
        
        addUserInfo(data);

        history.push('/register/address')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          err.inner.map(e => e.message).map(message => (
            addToast({
              title: "Erro no cadastro",
              description: message,
              type: "error"
            })
          ))

          return;
        }

        addToast({
          title: "Erro ao comunicar com servidor",
          type: "error"
        })
      }
    },
    [addToast, history, location.state.barber, addUserInfo]    
  )
  
  return (
    <Container>
      <RegisterSideBar
        tier={2}
      />

      <Content>
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="name"
              label="NOME COMPLETO"
              placeholder="Guilherme Duque"
            />
            <Input
              name="cpf"
              label="CPF"
              placeholder="97846531255"
            />
            <Input
              name="email"
              label="EMAIL"
              placeholder="guilhermeduque@gmail.com"
            />
            <Input
              name="email_confirm"
              label="REPITA O EMAIL"
              placeholder="guilhermeduque@gmail.com"
            />
            <Input
              name="password"
              label="SENHA"
              placeholder="******"
            />
            <Input
              name="password_confirm"
              label="REPITA A SENHA"
              placeholder="******"
            />
            <Button
              text="CONTINUAR"
              type="submit"
            />
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
}