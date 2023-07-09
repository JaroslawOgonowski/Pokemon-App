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
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SubTitle = styled.h2`
  width: 96%;
  margin: 2vw auto;
  font-family: "Righteous", cursive;
  font-size: 2.5vw;
  color: #e1e4d0;
`;
