import { readableColor } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2vw;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  flex-wrap: wrap;
`;

export const CardImage = styled.img`
  width: 25vw;
  align-self: center;
  padding: 8vh;
  background-image: linear-gradient(
    328deg,
    rgba(1, 4, 10, 0.523) 0%,
    rgba(1, 4, 10, 0.661) 40%,
    ${(props) => props.color} 100%
  );
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    display: none;
  }
`;
export const Traits = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1vw;
`;

export const Trait = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  font-size: 2vw;
  border: 1px solid #938b8b;
  border-radius: 1vw;
  padding: 1vw;
  color: #d7cece;
`;

export const Description = styled.div`
width: calc(80% + 3vw);
  border: 1px solid #938b8b;
  border-radius: 1vw;
  padding: 1vw;
  color: #d7cece;
  font-size: 2vw;
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
