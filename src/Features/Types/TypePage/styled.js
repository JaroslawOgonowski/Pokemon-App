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
`;

export const Title = styled.h1`
  color: #e1e4d0;
  background-color: rgba(15, 15, 16, 0.867);
  box-shadow: 0px 0px 53px 38px rgba(15, 15, 16, 0.96);
  font-family: "Righteous", cursive;
  font-size: 3vw;
`;

export const TypeImage = styled.img`
  width: 4vw;
`;

export const TypeInfo = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url(${typeInfoBG});
  background-position-x: 40%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SubTitle = styled.h2`
  width: 96%;
  text-align: center;
  margin: 0 auto;
  padding: 2vw 0;
  font-family: "Righteous", cursive;
  font-size: 3vw;
  color: #e1e4d0;
`;

export const RelationBox = styled.div`
  text-align: center;
  width: 96%;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1vw;
`;

export const RelationDiv = styled.div`
  width: 96%;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  text-align: center;
`;

export const RelationTitle = styled.h3`
  width: 96%;
  height: 6vh;
  margin: 0.5vw auto;
  font-family: "Righteous", cursive;
  font-size: 1.5vw;
  color: #e1e4d0;
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
