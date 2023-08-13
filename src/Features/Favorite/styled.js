import styled from "styled-components";
import banner from "./Lugia-pokemon-fictional-creatures-artwork-fantasy-art-1664273-wallhere.com.jpg";

export const FavoriteStyledPage = styled.main`
  padding-top: 6vw;
  margin: 0;

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
  margin-bottom: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-position: 70% 40%;
    height: 15vh;
  }
`;

export const Title = styled.h1`
  font-size: 3vw;
  font-family: "Righteous", cursive;
  margin-left: -20%;
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

export const FavMoves = styled.div`

`;
