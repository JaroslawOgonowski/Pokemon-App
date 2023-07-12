import styled from "styled-components";
import ball from "./images/Poké_Ball_icon.png";

export const StyledSideBar = styled.ul`
  width: 20%;
  min-height: 15vh;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  animation: sideBarAnimation 0.5s ease;
  flex-wrap: wrap;

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
  @media (max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    gap: 1.5vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    gap: 4vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: 30px auto 0 auto;
    width: 96%;
    min-height: 50px;
    flex-direction: row;
    border-right: none;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding-bottom: 2vh;
    border-bottom: 1px solid black;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    flex-wrap: wrap;
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
  color: black;

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
