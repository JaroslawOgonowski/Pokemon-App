import styled from "styled-components";

export const PokemonName = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1.4vw;
  word-break: break-all;
  transition: color 500ms;
`;

export const PokemonId = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1.5vw;
  transition: color 500ms;
`;

export const Wrapper = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
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
		    transform: translateX(-30px) rotate(-6deg) scale(2.5);
	    }
	    30% {
		    transform: translateX(15px) rotate(6deg) scale(2);
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