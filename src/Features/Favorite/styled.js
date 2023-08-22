import styled from "styled-components";
import banner from "./Lugia-pokemon-fictional-creatures-artwork-fantasy-art-1664273-wallhere.com.jpg";

export const FavoriteStyledPage = styled.main`
  padding-top: 6vw;
  margin: 0;
  padding-bottom: 30vh;
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    padding-top: 80px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 20vh;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-position: 70% 40%;
    height: 15vh;
  }
`;

export const Title = styled.h1`
  font-size: 3.5vw;
  font-family: "Righteous", cursive;
  margin: 0 0 0 -20%;
  background-image: linear-gradient(
    90deg,
    rgba(207, 228, 226, 1) 0%,
    rgba(141, 255, 240, 0.871) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 5s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-size: 400% 400%;
      background-position: 0% 50%;
    }
    50% {
      background-size: 200% 200%;
      background-position: 100% 50%;
    }
    100% {
      background-size: 400% 400%;
      background-position: 0% 50%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 28px;
    margin: 0 8px;

    background-image: linear-gradient(
      90deg,
      rgba(248, 254, 254, 1) 0%,
      rgba(212, 218, 234, 0.971) 100%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 26px;
    margin-left: 10%;
    background-image: linear-gradient(
      90deg,
      rgba(19, 20, 20, 1) 0%,
      rgba(34, 35, 38, 0.971) 100%
    );
  }
`;

export const FirstSection = styled.section`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled.h2`
  width: 100%;
  font-size: 3vw;
  padding: 2vh;
  margin: 0;
  font-family: "Righteous", cursive;
  text-align: center;
  background-image: linear-gradient(
    90deg,
    rgba(207, 228, 226, 1) 0%,
    rgba(141, 255, 240, 0.871) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 5s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-size: 400% 400%;
      background-position: 0% 50%;
    }
    50% {
      background-size: 200% 200%;
      background-position: 100% 50%;
    }
    100% {
      background-size: 400% 400%;
      background-position: 0% 50%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 26px;
    margin: 0 8px;

    background-image: linear-gradient(
      90deg,
      rgba(248, 254, 254, 1) 0%,
      rgba(212, 218, 234, 0.971) 100%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 24px;
    margin-left: 10%;
    background-image: linear-gradient(
      90deg,
      rgba(19, 20, 20, 1) 0%,
      rgba(34, 35, 38, 0.971) 100%
    );
  }
`;

export const FavoritePokemons = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FavMoves = styled.div`
  width: 100%;
  margin: 0;
  padding: 0%;
  background-color: #190320fc;
`;

export const FavAbilities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RemovePokemonButton = styled.button`
  cursor: pointer;
  font-family: "Agdasima", sans-serif;
  font-size: 1.5vw;
  writing-mode: vertical-lr;
  padding: 0 1vw;
  border: none;
  border-radius: 0.5vw;
  background: linear-gradient(135deg, #780404, #a10b0b);
  box-shadow: 0 6px 20px rgba(161, 11, 11, 0.3);
  color: white;
  transition: 300ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(161, 11, 11, 0.4);

    &:before,
    &:after {
      background: rgba(255, 255, 255, 0.081);
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 3px 10px rgba(161, 11, 11, 0.4);
  }
`;
export const AbilityDiv = styled.div`
  max-width: 25%;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: center;
  justify-content: center;
`;

export const RemoveAbilityButton = styled.button`
  cursor: pointer;
  width: 80%;
  font-size: 1.2vw;
  margin: 2vh 6% 1vh 7%;
  justify-content: center;
  border: none;
  border-radius: 0.5vw;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  background: linear-gradient(135deg, #780404, #a10b0b);
  box-shadow: 0 6px 20px rgba(161, 11, 11, 0.3);
  color: white;
  transition: 300ms;
  font-family: "Agdasima", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(161, 11, 11, 0.4);

    &:before,
    &:after {
      background: rgba(255, 255, 255, 0.081);
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 3px 10px rgba(161, 11, 11, 0.4);
  }
`;
