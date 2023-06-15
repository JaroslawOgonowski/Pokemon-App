import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokemonName = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1.4vw;
  word-break: break-all;
  color: white;
  transition: color 500ms;
`;

export const PokemonId = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1.5vw;
  transition: color 500ms;
  visibility: hidden;
`;

export const Wrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  width: 13vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1vw;
  border: 0.2vw solid ${(props) => props.dominantColor};
  border-radius: 0.5vw;
  transition: 500ms;
  background-image: linear-gradient(349deg, rgba(11, 1, 19, 1) 43%, ${(props) => props.dominantColor} 100%);
  -webkit-box-shadow: 8px 8px 24px 2px ${(props) => props.dominantColor};
  -moz-box-shadow: 8px 8px 24px 2px ${(props) => props.dominantColor};
  box-shadow: 8px 8px 24px 2px ${(props) => props.dominantColor};
  filter: brightness(90%);

  &:hover {
    transform: scale(1.05);
    filter: brightness(100%);

    ${PokemonName} {
      background-image: linear-gradient(
        166deg,
        rgba(253, 255, 0, 1) 0%,
        rgba(159, 235, 32, 1) 97%);
      -webkit-background-clip: text;
      color: transparent;
    }

    ${PokemonId} {
      visibility: visible;
      background-image: linear-gradient(
        166deg,
        rgba(253, 255, 0, 1) 0%,
        rgba(159, 235, 32, 1) 97%
      );
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

export const PokemonImage = styled.img`
  aspect-ratio: 1/1;
  width: calc(100% - 2vw);
  padding: 1vw;
  transition: 0.5s;

  &:hover {
    animation: pokemonAnimation 5s ease 0s 1 normal forwards;
    @keyframes pokemonAnimation {
	    0%,
	    100% {
		  transform: translateX(0%);
		  transform-origin: 50% 50%;
	    }
	    15% {
		    transform: translateX(-30px) rotate(-6deg) scale(1.4);
	    }
	    30% {
		    transform: translateX(15px) rotate(6deg) scale(1);
	    }
	    45% {
		    transform: translateX(-15px) rotate(-3.6deg) scale(1.1);
	    }
      60% {
        transform: translateX(9px) rotate(2.4deg)  scale(0.8);
      }
      75% {
        transform: translateX(-6px) rotate(-1.2deg);
      }
    }
  }
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