import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.png';
import navalha from '../../assets/navalha.svg';

import {
  Container,
  Header,
  IconWrapper,
  Content,
  LoginContainer,
} from './styles'

interface SignInFormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  
  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {        
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        
        await schema.validate(data, {
          abortEarly: false,
        });
        
        await signIn({
          email: data.email,
          password: data.password,
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          err.inner.map(e => e.message).map(message => (
            addToast({
              title: "Erro no login",
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
    [signIn, addToast]
  );

  return (
    <Container>
      <Header>
        <img
          src={logoImg}
          alt="logo iBarber"
        />
        <h1>Basta alguns cliques para você renovar o visual!</h1>
        <p>Os melhores barbeiros você encontra aqui.</p>
        <IconWrapper>
          <img src={navalha} alt="navalha"/>
        </IconWrapper>
      </Header>
      <Content>
        <LoginContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <legend>Faça o login:</legend>

            <Input
              name="email"
              label="EMAIL"
              placeholder="email@example.com"
            />
            <Input
              name="password"
              label="SENHA"
              placeholder="******"
            />
            
            <Button type="submit" text="Entrar"/>

            <p>Não tem conta? <Link to="register/profile">Crie sua conta agora!</Link></p>
          </Form>
        </LoginContainer>
      </Content>
    </Container>
  )
}
