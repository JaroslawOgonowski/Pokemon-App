import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledEvolution = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
`;

export const EvolutionTitle = styled.h2`
  font-family: 'Righteous', cursive;
  font-size: 1.8vw;
  text-align: center;
`;

export const StyledEvolutinImage = styled.img`
  height: 5vw;
`;

export const EvolutionBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 2vw;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 0.5vw;
  transition: 500ms;
  
  &:hover{
    transform: scale(1.2);
  }
`;

export const PokemonEvolutionName = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1vw;
  text-align: center;
  text-decoration: none;
  color: black;
`;

export const Next = styled.div`
align-self: center;
`;