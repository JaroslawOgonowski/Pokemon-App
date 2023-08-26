import styled from "styled-components";
import bannerRed from "./images/pokemon_play_pokemon_banner-02@2x.jpg";
import bannerBlue from "./images/pokemon_play_pokemon_banner-blue.jpg";
import bannerGreen from "./images/pokemon_play_pokemon_banner-green.jpg";
import bannerPurp from "./images/pokemon_play_pokemon_banner-purple.jpg";
import bannerYellow from "./images/pokemon_play_pokemon_banner-yelow.jpg";

const banners = [bannerRed, bannerBlue, bannerGreen, bannerPurp, bannerYellow];

const randomBanner = () => {
  const randomIndex = Math.floor(Math.random() * banners.length);
  return banners[randomIndex];
};

export const StyledAbilityPage = styled.div`
  width: 100%;
  min-height: 150vh;
  margin: 0 auto;
  padding-top: 6vw;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    188deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(12, 17, 26, 1) 62%,
    rgba(13, 14, 15, 1) 100%
  );

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    padding-top: 80px;
    gap: 2vh;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 20vh;
  background-image: url(${randomBanner});
  background-position-x: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 8vh;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  border-radius: 1vw;
  color: white;
`;

export const GenInfo = styled.div`
  color: #bbb6b6;
  font-size: 1.3vw;
  align-self: flex-end;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 13px;
  }
`;

export const Description = styled.div`
  width: 100%;
  margin: 2vw 1vw;
  font-size: 2vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 16px;
  }
`;

export const PokeAbility = styled.div`
  margin-left: 3vw;
  display: flex;
  flex-wrap: wrap;
  gap: 2vh 1%;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    margin-left: 6vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin-left: 25%;
  }
`;
