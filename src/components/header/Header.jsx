import React from "react";
import { styled } from "styled-components";
import { HeaderCartButton } from "./HeaderCartButton";
// import {BasketIcon} from '../../assets/index'
// import basketIcons from "../../assets/icons/basket-icon.svg";
export const Header = () => {
  return (
    <StyledHeader>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  & > h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;
