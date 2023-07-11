import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Types = styled.div`
  margin-left: 1vw;
  display: flex;
  gap: 0.5vw;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    flex-direction: column;
    gap: 0;
  }

  ${({ table }) =>
    table &&
    css`
      justify-content: center;
      align-items: center;
    `};

  ${({ img }) =>
    img &&
    css`
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 1vw;
      grid-row-gap: 1vw;

      @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
      }

      @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
      }
      @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(7, 1fr);
      }
    `};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 2vw;
      justify-content: center;
      align-items: center;
      width: 98%;

      @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        flex-direction: row;
        gap: 3%;
      }
    `};
`;

export const Type = styled.div`
  padding: 0.5vw 2vw;
  border-radius: 1vw;
  font-size: 1.3vw;
  justify-content: center;
  text-transform: uppercase;
  font-family: "Righteous", cursive;
  margin: 1vw 0;
  text-align: center;
  background-color: ${(props) => props.typeBackgroundColor};
  color: ${(props) => props.typeFontColor};
  -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw
    ${(props) => props.typeBackgroundColor};
  -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba
    ${(props) => props.typeBackgroundColor};
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba
    ${(props) => props.typeBackgroundColor};

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 20px;
    border-radius: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 11px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 300ms;
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.3);
  }

  ${({ img }) =>
    img &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 3vw;
    `};
`;

export const Image = styled.img`
  width: 8vh;
  height: 8vh;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 64px;
    height: 64px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    width: 40px;
    height: 40px;
  }
`;
