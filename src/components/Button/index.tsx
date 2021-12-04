import React, { ButtonHTMLAttributes } from 'react';

import {
  Container
} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({text, loading, ...rest}) => {
  return (
    <Container type="button" loading={loading} disabled={loading} {...rest}>
      <span>{text}</span>
    </Container>
  );
}