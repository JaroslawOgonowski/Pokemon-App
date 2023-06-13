import styled from "styled-components";

export const Wrapper = styled.a`
  cursor: pointer;
  text-decoration: none;
  aspect-ratio: 3 / 4;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  border: 1px solid black;
  border-radius: 0.5vw;
  transition: 500ms;
  background-color: rgba(230, 236, 237, 0.83);
  background-image: linear-gradient(158deg, rgba(230, 236, 237, 0.83) 0%, rgba(212, 189, 71, 0.91) 79%);
  -webkit-box-shadow: 8px 8px 24px 2px rgba(156, 153, 108, 1);
  -moz-box-shadow: 8px 8px 24px 2px rgba(156, 153, 108, 1);
  box-shadow: 8px 8px 24px 2px rgba(156, 153, 108, 1);
  filter: brightness(90%);
  &:hover{
    transform: scale(1.05);
    filter: brightness(100%)
  }
`;

export const PokemonImage = styled.img`
  aspect-ratio: 3/4;
  width: calc(100% - 2vw);
  padding: 1vw;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  border-top: 2px solid black;
  border-radius: 0.5vw;
  
`;

export const PokemonId = styled.div`
font-family: 'Righteous', cursive;
font-size: 3vw;
`;

export const PokemonName = styled.div`
font-family: 'Righteous', cursive;
font-size: 1.8vw;
word-break: break-all;
`;