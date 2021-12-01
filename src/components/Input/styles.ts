import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-width: 500px;
  border-bottom: 2px solid #f9f4e5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  margin: 16px 0;

  & + div {
    margin-top: 24px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
  ${props =>
    props.isFilled &&
    css`
      border-color: #ff9000;
    `}

  span {
    font-family: "Ubuntu", sans-serif;
    color: #ffa200;
    padding-right: 8px;
    font-size: 18px;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    font-family: "Ubuntu", sans-serif;
    color: #ffa200;
    font-size: 18px;
    text-align: right;
    
    &::placeholder {
      color: #ffa200;
    }
  }
`;