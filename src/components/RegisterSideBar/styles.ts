import styled, { css } from 'styled-components';

interface ItemProps {
  tier: number;
  activeTier: number;
}

export const Container = styled.div`
  width: 28%;
  height: 100%;
  background: #000000;
  padding: 24px 64px;

  > img {
    width: 220px;
    height: 220px;
  }
`;

export const ItemsContainer = styled.div`
  padding: 24px 64px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: "Roboto";
    color: #f9f4e5;
    font-size: 27px;
  }

  & + div {
    margin-top: 22px;
  }
`;

export const NumberWrapper = styled.div<ItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #f9f4e5;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin-right: 8px;

  ${(props) => (props.tier <= props.activeTier && css`
    background: #FFA200;
    border-color: #FFA200;
  `)}
`;
