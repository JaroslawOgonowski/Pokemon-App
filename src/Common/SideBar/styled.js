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
  gap:1vw;
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
`;

export const ListItem = styled.li`
  width: 95%;
  height: 2vw;
  padding: 0;
  margin: 0;
`;

export const StyledA = styled.a`
  margin-left: 1vw;
  text-decoration: none;
  font-size: 1.4vw;
`;
