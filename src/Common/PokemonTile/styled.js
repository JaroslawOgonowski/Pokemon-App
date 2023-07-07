import { Link } from "react-router-dom";
import styled from "styled-components";
import MiniBall from "./images/pokeball-svgrepo-com.svg";

export const CornerBall = styled.div`
  z-index: -2;
  position: absolute;
  top: -2vw;
  left: -2vw;
  width: 6vh;
  height: 6vh;
  background-image: url(${MiniBall});
  background-repeat: no-repeat;
  background-size: cover;
  animation: rotateAnim 4s ease infinite normal forwards;
  @keyframes rotateAnim {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @media (min-width: 400px) {
    top: -1.2vw;
    left: -1.2vw;
  }

  @media (min-width: 600px) {
    top: -0.8vw;
    left: -0.8vw;
  }
  @media (min-width: 1100px) {
    top: -0.2vw;
    left: -0.2vw;
  }
`;

export const PokemonName = styled.div`
  margin-right: 6%;
  margin-left: 10%;
  font-family: "Righteous", cursive;
  font-size: 1.4vw;
  overflow-wrap: break-word;
  color: white;
  transition: color 500ms;
  align-self: flex-end;
  text-align: right;
  padding-bottom: 5%;

  @media (max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
    margin-right: 5%;
  }
  @media (max-width: 800px) {
    font-size: 15px;
    margin-right: 5%;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 3vw;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 4vw;
  }
`;

export const PokemonId = styled.div`
  position: absolute;
  z-index: -1;
  top: 60%;
  right: 4%;
  font-family: Righteous, cursive;
  font-size: 9.8vh;
  color: rgba(120, 120, 120, 0.719);
  transition: color 500ms ease 0s;

  
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    top: 60%;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    top: 65%;
    font-size: 9.8vh;
  }
  @media (max-width: 690px) {
    top: 56%;
    font-size: 8.2vw;
  }
  @media (max-width: 600px) {
    top: 62%;
  }
  @media (max-width: 350px) {
    font-size: 8.8vw;
    top: 54%;
  }
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
  align-items: center;
  gap: 0.1vw;
  position: relative;
  border: 0.2vw solid rgba(6, 10, 27, 0.907) 43%;
  border-radius: 5px 45px 5px 0;
  transition: 500ms;
  background-image: linear-gradient(
    349deg,
    rgba(6, 10, 27, 0.907) 43%,
    ${(props) => props.dominantcolor} 100%
  );
  -webkit-box-shadow: 8px 8px 24px 2px ${(props) => props.dominantcolor};
  -moz-box-shadow: 8px 8px 24px 2px ${(props) => props.dominantcolor};
  box-shadow: 8px 8px 24px 2px ${(props) => props.dominantcolor};
  filter: brightness(100%);
  animation: TileAnimation 1s ease 0s 1 normal forwards;
  visibility: ${({ inview }) => (inview ? "visible" : "hidden")};
  animation: ${({ inview }) =>
    inview ? "TileAnimation 0.3s ease-in-out" : "none"};

  &:hover {
    transform: scale(1.05);
    filter: brightness(110%);

    ${PokemonName} {
      background-image: linear-gradient(
        166deg,
        rgba(253, 255, 0, 1) 0%,
        rgba(159, 235, 32, 1) 97%
      );
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
    @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
      transform: scale(1);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    width: 23%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 30%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 30%;
    height: auto;
  }
  @media (max-width: 600px) {
    width: 45%;
    height: auto;
  }

  @keyframes TileAnimation {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const PokemonImage = styled.img`
  aspect-ratio: 1/1;
  width: calc(100% - 2vw);
  padding: 1vw;
  transition: 0.5s;
  margin-bottom: 20%;
  margin-top: 10%;

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
        transform: translateX(9px) rotate(2.4deg) scale(0.8);
      }
      75% {
        transform: translateX(-6px) rotate(-1.2deg);
      }
    }
    @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
      animation: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    width: calc(100% - 24px);
  }
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
  flex: 1;
`;
