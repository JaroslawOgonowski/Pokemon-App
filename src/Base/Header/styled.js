import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 6vw;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.headerColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 8px 8px 24px 2px rgba(156, 153, 108, 1);
  -moz-box-shadow: 8px 8px 24px 2px rgba(156, 153, 108, 1);
  box-shadow: 8px 8px 24px 2px rgba(156, 153, 108, 1);
  z-index: 99;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: 80px;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
`;

export const Logo = styled.img`
  height: 5vw;
  margin-left: 1vw;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    height: 20px;
  }
`;

export const StyledNavigation = styled.nav`
  margin-right: 5vw;
  display: flex;
  gap: 2vw;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.6vw;
  font-weight: 700;
  transition: color 0.5s;
  padding: 0.8vw 2.4vw;

  &.active {
    border: solid 1px white;
    border-radius: 2vw;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
      border-radius: 35px;
    }
  }

  ${({ activator }) =>
    activator &&
    css`
      border: solid 1px white;
      border-radius: 2vw;

      @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        border-radius: 35px;
      }
    `}

  &:hover {
    background-image: linear-gradient(
      166deg,
      rgba(253, 255, 0, 1) 0%,
      rgba(159, 235, 32, 1) 97%
    );
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;
