import styled from "styled-components";
import ball from "./images/Poké_Ball_icon.png"

export const StyledSideBar = styled.ul`
  width: 20%;
  min-height: 20vh;
  padding: 0;
  margin: 3vw;
  border-right: 1px solid black;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  animation: sideBarAnimation 0.5s ease;

  li::before {
    content: '';
    display: inline-block;
    height: 1.4vw;
    width: 1.4vw;
    background-size: contain;
    background-repeat: no-repeat;
    margin:0 0 -0.3vw -2.2vw;
    background-image: url(${ball});
    
    @media(max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
      height: 2vw;
      width: 2vw;
    };

    @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
      height: 24px;
      width: 24px;
      margin: 0;
    };
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
  @media(max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    gap: 1.5vw;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    gap: 4vw;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 96%;
    min-height: 50px;
    flex-direction: row;
    border-right: none;
    gap: 20px;
    justify-content: center;
    align-items: center;
  };
`;

export const ListItem = styled.li`
  width: 95%;
  height: 2vw;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: fit-content;
  };
`;

export const StyledA = styled.a`
  margin-left: 1vw;
  text-decoration: none;
  font-size: 1.4vw;


  @media(max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    margin-left: 2vw;
    font-size: 1.8vw;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 2.2vw;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin-left: 12px;
    font-size: 14px;
  };
`;

export const LinkText = styled.div`
`;
