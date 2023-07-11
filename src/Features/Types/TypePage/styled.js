import styled from "styled-components";
import topBanner from "./images/397436-wallpaper-poke-ball-pokemon-4k-hd.jpg";
import typeInfoBG from "./images/titan-palkia-kaiju-pokemon-fan-art-4k-p3-1366x768.jpg";

export const TopBanner = styled.div`
  width: 100%;
  height: 20vh;
  background-image: url(${topBanner});
  background-size: cover;
  background-position-y: 30%;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  justify-content: center;
  position: relative;
`;

export const TitleBox = styled.div`
  position: absolute;
  top: 5%;
  left: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    top: 5vh;
  }

  @media (max-width: 500px) {
    top: 40%;
  }
  @media (max-width: 400px) {
    top: 30%;
    left: 10vw;
  }
`;

export const TypeImage = styled.img`
  width: 4vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 67px;
  }
  @media (max-width: 550px) {
    width: 40px;
  }
`;

export const Title = styled.h1`
  color: #e1e4d0;
  background-color: rgba(15, 15, 16, 0.867);
  box-shadow: 0px 0px 53px 38px rgba(15, 15, 16, 0.96);
  font-family: "Righteous", cursive;
  font-size: 3vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 4vw;
  }
  @media (max-width: 650px) {
    font-size: 5vw;
  }
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

export const TypeInfo = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url(${typeInfoBG});
  background-position-x: 40%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 10vh;
`;

export const SubTitle = styled.h2`
  width: 96%;
  text-align: center;
  margin: 0 auto;
  padding: 2vw 0;
  font-family: "Righteous", cursive;
  font-size: 3vw;
  color: #e1e4d0;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 3.8vw;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 24px;
  }
`;

export const RelationBox = styled.div`
  width: 100%;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1vw;
`;
export const RelationTitle = styled.h3`
  width: 100%;
  height: 6vh;
  margin: 0.5vw auto;
  font-family: "Righteous", cursive;
  font-size: 1.5vw;
  color: #e1e4d0;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
  }
`;
export const RelationDiv = styled.div`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2%;
  text-align: center;
  background-color: #3d083543;
`;

export const HideListButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: white;
`;

export const SubTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  background: linear-gradient(45deg, #000000, #2e0833);
  background-size: 200% 200%;
  animation: gradientAnimation 5s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const PokemonDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 10vh;
  background: linear-gradient(45deg, #eeee59, #ffff1d, #ffd700);
  background-size: 200% 200%;
  animation: gradientAnimation 5s ease-in-out infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 150%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 150%;
    }
  }
`;
