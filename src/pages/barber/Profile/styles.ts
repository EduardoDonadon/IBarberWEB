import { shade } from 'polished';
import styled from 'styled-components';

import insideBackground from '../../../assets/insideBackground.png';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${insideBackground}) center;
`;

export const HeaderImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 24px;
  border-radius: 8px;

  img { 
    height: 210px;
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  
  width: 186px;
  height: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ffa200')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 0 64px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  width: 60%;

  div:not(:first-child) {
    margin-left: 30px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 42px;
    font-weight: bold;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    margin-bottom: 8px;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
`;

export const Calendar = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 28px;
  }

  > div {
    display: flex;
    align-items: center;

    input {
      min-width: 130px;
      height: 40px;
      padding: 12px;
      border-radius: 8px;
      font-size: 16px;
    }
  }

  .DayPicker {
    border-radius: 10px;
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
    background: transparent;
    border-radius: 10px;
  }
  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }
  .DayPicker-NavButton {
    color: #f4ede8 !important;
  }
  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }
  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: transparent;
    border-radius: 0 0 10px 10px;
  }
  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;
    > div {
      text-align: center;
    }
  }
  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }
  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #F9F4E5;
    border-radius: 10px;
    color: #000;
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#F9F4E5')};
  }
  .DayPicker-Day--today {
    font-weight: normal;
  }
  .DayPicker-Day--disabled {
    color: #f4ede8 !important;
    background: transparent !important;
  }
  .DayPicker-Day--selected {
    background: #FFA200 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;

export const TimePicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const CutsContainer = styled.div`
  width: 50%;
  margin-top: 48px;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
  }
`;

export const CutsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  margin-top: 12px;

  img {
    border-radius: 8px;
    padding-bottom: 8px;
    width: 200px;
    height: 200px;
  }
`;


export const AddCutWrapper = styled.label`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  border: 2px dashed #FFA200;
  background: transparent;
  padding-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
  }

  input {
    display: none;
  }
`;