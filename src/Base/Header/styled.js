import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 6vw;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.headerColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Logo = styled.img`
  height: 5vw;
  margin-left: 1vw;
  cursor: pointer;
  transition: 500ms;

  &:hover{
    transform: scale(1.05);
  }
`;

export const StyledNavigation = styled.nav`
margin-right: 5vw;
display: flex;
gap: 2vw;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.6vw;
  font-weight: 700;
  transition: color 0.5s;
  padding: 1vw 2vw;

  &.active{
    border: solid 1px white;
    border-radius: 2vw;
  }

  &:hover{  
    background-image: linear-gradient(201deg, rgba(252, 119, 89, 1) 31%, rgba(255, 242, 34, 0.96) 75%, rgba(18, 38, 121, 1) 100%);
    -webkit-background-clip: text;
    color: transparent;    
  }

  ${({ logo }) => logo && css`
    &.active{
      border: none;
    }
   `}
`

export const Ball = styled.img`
  cursor: pointer;
  margin-top: 200px;
  margin-left: 150px;
  width: 100px;
  transition: 500ms;
  
  &:hover{
    animation: rotate-vert-center ease infinite 3s;
  }

  @keyframes rotate-vert-center {
    0% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
`;