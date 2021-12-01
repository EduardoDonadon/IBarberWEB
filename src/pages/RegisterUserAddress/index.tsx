import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { viaCep } from '../../services/api';
import { useRegisterUser } from '../../hooks/registerUser';
import { useToast } from '../../hooks/toast';

import { RegisterSideBar } from '../../components/RegisterSideBar';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Content,
  FormContainer,
  FormWrapper
} from './styles';

interface InitialDataProps {
  street: string;
  neighborhood: string;
  state: string;
  city: string;
}

interface AddressData extends InitialDataProps{
  cep: string;
  number: string;
  complement: string;
}

export const RegisterUserAddress: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { user, addUserAddress, registerUser } = useRegisterUser(); 
  const [initialData, setInitialData] = useState<InitialDataProps>({} as InitialDataProps);

  const handleCepChange = useCallback((e) => {
    const inputCep = e.target.value;

    if (inputCep.length === 8) {
      viaCep.get(`/${inputCep}/json/`).then((response) => {
        if(response.status === 200) {
          setInitialData({
            street: response.data.logradouro,
            neighborhood: response.data.bairro,
            state: response.data.uf,
            city: response.data.localidade,
          })
        }
      })
    }
  }, [])

  const handleSubmit = useCallback(async (data: AddressData) => {
    try {        
      const schema = Yup.object().shape({
        street: Yup.string().required('Rua obrigatória'),
        neighborhood: Yup.string().required('Bairro obrigatório'),
        state: Yup.string().required('Estado obrigatório'),
        city: Yup.string().required('Cidade obrigatória'),
        cep: Yup.string().required('CEP obrigatório'),
        number: Yup.string().required('Número obrigatório'),
        complement: Yup.string().required('Complemento obrigatório'),
      });
      
      await schema.validate(data, {
        abortEarly: false,
      });
      
      addUserAddress(data);
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
  }, [addUserAddress, addToast])

  useEffect(() => {
    if(!!user.address) {
      registerUser();

      addToast({
        title: "Cadastro realizado!"
      });

      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <Container>
      <RegisterSideBar
        tier={3}
      />        

      <Content>
        <FormContainer>
          <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
            <Input
              name="cep"
              label="CEP"
              placeholder="ex: 42703-160"
              onChange={handleCepChange}
            />
            <FormWrapper>
              <Input
                name="street"
                label="RUA"
                placeholder="ex: Tancredo Neves"
              />
              <Input
                name="neighborhood"
                label="BAIRRO"
                placeholder="ex: Pituba"
              />
              <Input
                name="state"
                label="ESTADO"
                placeholder="ex: Bahia"
              />
              <Input
                name="city"
                label="CIDADE"
                placeholder="ex: Salvador"
              />
              <Input
                name="number"
                label="NÚMERO"
                placeholder="ex: 480"
              />
              <Input
                name="complement"
                label="COMPLEMENTO"
                placeholder="ex: apt 408"
              />
            </FormWrapper>
            <Button
              type="submit"
              text="CADASTRAR"
            />
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
}