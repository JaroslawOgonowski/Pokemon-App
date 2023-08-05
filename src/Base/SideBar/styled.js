import styled from "styled-components";
import ball from "./images/Poké_Ball_icon.png";
import { css } from "styled-components";

export const SidebarTitle = styled.button`
  position: absolute;
  top: 6vw;
  left: 0;
  z-index: 99;
  width: 3.5vw;
  height: 3.5vw;
  border: none;
  border-radius: 0 0 0.5vw 0;
  font-size: 3vw;
  background: none;
  color: white;
  font-family: "Righteous", cursive;
  align-self: start;
  cursor: pointer;
  transition: 500ms;
  background-color: #080303a7;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
  top: 80px;
  left: auto;
  right: 0;
  width: 60px;
  height: 60px;
}
  @media (max-width: 550px) {
    top: 80px;
    max-width: 100%;
    text-align: center;
    background-color: #080303a7;
  }

  ${({ sideBarOn }) =>
    sideBarOn &&
    css`
      transform: translateX(17vw);
      background-color: transparent;

      @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        transform: translateX(0);
        background: none;
      }
    `};
`;

export const StyledSideBar = styled.ul`
  position: absolute;
  top: 6vw;
  left: 0;
  width: 20%;
  flex-grow: 1;
  padding: 1vw;
  padding-top: 3%;
  margin: 0;
  list-style: none;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  gap: 1vw;
  animation: sideBarAnimation 0.5s ease;
  flex-wrap: wrap;
  background-color: #080303e7;
  transition: 500ms;
  z-index: 3;
  padding-bottom: 10vh;
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
    top: 80px;
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
  @media (max-width: 550px) {
    margin-bottom: 50px;
    padding-bottom: 40px;
    height: 70vh;
    background-color: #080303f6;
  }

  ${({ sideBarOn }) =>
    sideBarOn &&
    css`
      transform: translateX(-100%);

      @media (max-width: 550px) {
        transform: translateX(-0) translateY(-140%);
        display: none;
      }
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
  @media (max-width: 550px) {
    padding: 8px 0;
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
