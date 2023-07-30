import styled from "styled-components";
import banner from "./unnamed.jpg";

export const StyledPokemonPage = styled.main`
  margin: 0 auto;
  padding-top: 6vw;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.color} 0%,
    rgba(251, 249, 249, 0.986) 5%,
    rgba(251, 249, 249, 0.986) 95% 100%
  );

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    padding-top: 80px;
  }  
`;

export const TitleBanner = styled.div`
  width: 100%;
  height: 25vh;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0%;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: 15vh;
  }
`;

export const PokemonName = styled.h1`
  width: 100%;
  font-size: 3vw;
  font-family: "Righteous", cursive;
  margin: 2vw 10%;
  background-image: linear-gradient(
    90deg,
    rgba(231, 241, 241, 1) 0%,
    rgba(165, 172, 192, 0.871) 100%
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
`;
