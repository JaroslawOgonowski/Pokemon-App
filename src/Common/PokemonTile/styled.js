import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokemonName = styled.div`
  margin-right : 6%;
  margin-left: 10%;
  font-family: 'Righteous', cursive;
  font-size: 1.4vw;
  overflow-wrap: break-word;
  color: white;
  transition: color 500ms;
  align-self: flex-end;
  text-align: right;
  padding-bottom: 5%;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    font-size: 20px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;    
    margin-right: 5%;
  };
  @media(max-width: 800px) {
    font-size: 15px;    
    margin-right: 5%;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 3vw;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 6vw;
  };
`;

export const PokemonId = styled.div`
  margin-top: 10%;
  margin-left: 5%;
  font-family: 'Righteous', cursive;
  font-size: 1.5vw;
  transition: color 500ms;
  visibility: hidden;

  @media(max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    font-size: 24px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 20px;
    margin-left: 5%;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 18px;
  };
`;

export const Wrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  aspect-ratio: 13 / 20;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.1vw;
  border: 0.2vw solid ${(props) => props.dominantcolor};
  border-radius: 0.5vw;
  transition: 500ms;
  background-image: linear-gradient(349deg, rgba(11, 1, 19, 1) 43%, ${(props) => props.dominantcolor} 100%);
  -webkit-box-shadow: 8px 8px 24px 2px ${(props) => props.dominantcolor};
  -moz-box-shadow: 8px 8px 24px 2px ${(props) => props.dominantcolor};
  box-shadow: 8px 8px 24px 2px ${(props) => props.dominantcolor};
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
    @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
      transform: scale(1);
    };
  }
  @media(max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    width: 23%;
    height: auto;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 30%;
    height: auto;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {    
    width: 45%;
    height: auto;
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {    
    width: 85%;
    height: auto;
  };
`;

export const PokemonImage = styled.img`
  aspect-ratio: 1/1;
  width: calc(100% - 2vw);
  padding: 1vw;
  transition: 0.5s;
  margin-bottom: 20%;

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
    @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
      animation: none;
    };
  }

  @media(max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
   width:calc(100% - 24px);
  };
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 10%;
  border-top: 2px solid ${(props) => props.dominantcolor};
  border-radius: 50%;
  flex: 1
`;