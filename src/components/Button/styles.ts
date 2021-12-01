import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  loading?: boolean;
}

export const Container = styled.button<ButtonProps>`
  height: 45px;
  width: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: '#f9f4e5';
  border: none;
  border-radius: 10px;
  margin: 20px 0;

  &:hover {
    background: ${shade(0.2, '#f9f4e5')};
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #ffa200;
  }

  ${({ loading }) => loading && css`
    background: ${shade(0.6, '#f9f4e5')};
    cursor: default;

    span {
      color: ${shade(0.6, '#ffa200')}
    }

    &:hover {
      background: ${shade(0.6, '#f9f4e5')};
    }
  `};
`;