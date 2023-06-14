import styled from "styled-components";

export const Wrapper = styled.a`
  cursor: pointer;
  text-decoration: none;
  width: 13vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  border: 1px solid black;
  border-radius: 0.5vw;
  transition: 500ms;
  background-color: rgba(230, 236, 237, 0.83);
  background-image: linear-gradient(158deg, rgba(0, 0, 0, 1) 0%, ${(props) => props.dominantColor});
  -webkit-box-shadow: 8px 8px 24px 2px ${(props) => props.dominantColor};
  -moz-box-shadow: 8px 8px 24px 2px ${(props) => props.dominantColor};
  box-shadow: 8px 8px 24px 2px ${(props) => props.dominantColor};
  filter: brightness(90%);
  &:hover{
    transform: scale(1.05);
    filter: brightness(100%)
  }
`;

export const PokemonImage = styled.img`
  aspect-ratio: 1/1;
  width: calc(100% - 2vw);
  padding: 1vw;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1vw;
  border-top: 2px solid black;
  border-radius: 0.5vw;
`;

export const PokemonId = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1.5vw;
`;

export const PokemonName = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1.4vw;
  word-break: break-all;
`;