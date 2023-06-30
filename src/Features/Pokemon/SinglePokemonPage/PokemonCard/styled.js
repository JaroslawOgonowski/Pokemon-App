import { readableColor } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2vw;
  width: 96%;
  display: flex;
  gap: 0;
`;

export const CardImage = styled.img`
  width: 30%;
  height: 30%;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    display: none;
  }
`;

export const CardBox = styled.div`
  width: 70%;
  display: flex;
  gap: 1vw;
  border: 1px solid gray;
  animation: pokeCardAnimation 500ms ease;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 0;
  }

  @keyframes pokeCardAnimation {
    0% {
      opacity: 0;
      transform: translateX(1000px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const TitleImage = styled.img`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    display: inline-block;
    width: 20%;
    align-self: flex-start;
  }
`;

export const TextBox = styled.div`
  width: 70%;
  margin-left: 1vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 78%;
    align-self: flex-end;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Righteous", cursive;
  width: 100%;
  color: black;
  font-size: 3vw;
  text-transform: uppercase;
  margin: 1vw 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 26px;
    justify-content: space-between;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 17px;
  }
`;

export const Description = styled.div`
  font-size: 1.3vw;
  color: #262626;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1vw;
  margin: 1vw 0;
  font-family: "Righteous", cursive;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 11px;
  }
`;

export const Generation = styled.div`
  font-size: 1.2vw;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
    padding: 10px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 11px;
  }
`;
export const Abilities = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    gap: 8px;
  }
`;

export const Ability = styled(Link)`
  text-decoration: none;
  font-family: "Righteous", cursive;
  margin: 0.5vw;
  padding: 0.5vw 2vw;
  border-radius: 1vw;
  font-size: 1.3vw;
  -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw ${(props) => props.color};
  -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw ${(props) => props.color};
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw ${(props) => props.color};
  background-color: ${(props) => props.color};
  color: ${(props) => readableColor(props.color, "#FFFFFF", "#000000")};
  transition: 300ms;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
    border-radius: 10px;
    padding: 2px 8px;
    margin: 0 2px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 11px;
    align-self: flex-end;
  }
`;
