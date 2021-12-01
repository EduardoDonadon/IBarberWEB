import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 125px;
  background-color: #1F1F1F;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 25px 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  img {
    height: 175px;
  }
`;

export const UserName = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  color: #ffa200;
  text-transform: uppercase;
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

export const IconContainer = styled.button`
  background: transparent;
  border: none;

  &:hover {
    background: ${shade(0.6, '#f9f4e5')};
    border-radius: 4px;
  }

  img {
    width: 44px;
    height: 44px;
  }

  & + button {
    margin-left: 8px;
  }
`;