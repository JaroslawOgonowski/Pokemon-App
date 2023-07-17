import styled from "styled-components";
import ball from "./images/Poké_Ball_icon.png";
import { css } from "styled-components";

export const SidebarTitle = styled.button`
  position: absolute;
  left: 1vw;
  margin-top: 5vh;
  border: none;
  border-radius: 1%;
  font-size: 1.5vw;
  background: none;
  color: white;
  font-family: "Righteous", cursive;
  align-self: start;

  @media (max-width: 1000px) {
    margin-top: 3vh;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    margin-top: 1vh;
    font-size: 20px;
  }

  @media (max-width: 550px) {
    top: 80px;
    max-width: 100%;
    
    text-align: center;
    background-color: #080303a7;
  }
`;

export const StyledSideBar = styled.ul`
  width: 20%;
  flex-grow: 1;
  padding: 1vw;
  padding-top: 5%;
  margin: 0;
  list-style: none;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  gap: 1vw;
  animation: sideBarAnimation 0.5s ease;
  flex-wrap: wrap;
  background-color: #080303a7;
  transition: 500ms;

  li::before {
    content: "";
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${ball});
    padding: 1vw;

    @media (max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
      padding: 1.5vw;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
      padding: 2vw;
    }
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
      padding: 3vw;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    gap: 1.5vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    gap: 4vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: 0 auto;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5vh;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding-top: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    flex-wrap: wrap;
  }

  ${({ sideBarOn }) =>
    sideBarOn &&
    css`
      transform: translateX(-100%);
    `};

  @keyframes sideBarAnimation {
    0% {
      opacity: 0;
      transform: translateX(-30vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const ListItem = styled.li`
  height: 5vw;
  width: 96%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: fit-content;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    justify-content: center;
  }
`;

export const StyledA = styled.a`
  margin-left: 1vw;
  text-decoration: none;
  font-size: 1.4vw;
  font-weight: 600;
  color: #dbc8c8;

  @media (max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    margin-left: 2vw;
    font-size: 1.8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 2.2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin-left: 12px;
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 16px;
  }

  &:hover {
    color: #384747;
  }
`;

export const LinkText = styled.div``;
