import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledEvolution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin-bottom: 2vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    margin-left: -24%;
  }
`;

export const EvolutionTitle = styled.h2`
  font-family: "Righteous", cursive;
  font-size: 1.8vw;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 20px;
  }
`;

export const StyledEvolutinImage = styled.img`
  height: 6vw;
  width: 6vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: 60px;
    width: 60px;
  }
`;

export const EvolutionBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 0;
  margin-left: 4vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    margin-left: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 0.5vw;
  transition: 500ms;
  padding: 0.5vw;

  &:hover {
    transform: scale(1.2);
  }
`;

export const PokemonEvolutionName = styled.div`
  font-family: "Righteous", cursive;
  font-size: 1vw;
  text-align: center;
  text-decoration: none;
  color: black;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 1.5vw;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 2vw;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 2.5vw;
  }
`;

export const Next = styled.div`
  align-self: center;
  font-size: 2vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 14px;
  }
`;

export const MultiEvolutionLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  gap: 0.2vw;
  justify-items: center;
  align-content: center;
`;
