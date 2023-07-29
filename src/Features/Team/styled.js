import styled from "styled-components";
import { keyframes } from "styled-components";

export const RandomTeamPage = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 6vw auto 0 auto;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  background-image: linear-gradient(
    90deg,
    rgba(16, 66, 65, 1) 0%,
    rgba(4, 9, 24, 1) 100%
  );
  box-shadow: 1px 14px 58px 1px rgba(0, 0, 0, 1);

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: 80px auto 0 auto;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 3vw;
  font-family: "Righteous", cursive;
  text-align: center;
  margin: 2vw 0;
  background-image: linear-gradient(
    90deg,
    rgba(182, 195, 195, 1) 0%,
    rgba(128, 135, 154, 1) 100%
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
    margin: 20px 0 0 0;
  }
`;

export const PkmBox = styled.div`
  width: 96%;
  display: flex;
  gap: 2vw;
  justify-content: space-evenly;
  align-items: center;
`;

export const TeamImage = styled.img`
  width: 13%;
  padding: 1vh;
  height: auto;
  border: 1px solid black;
  border-radius: 1rem;
`;

const glowingAnimation = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;

export const GenerateButton = styled.button`
  width: 60%;
  height: 10vh;
  margin-top: 10vh;
  margin-bottom: 8vh;
  font-family: "Righteous", cursive;
  font-size: 2vw;
  border: none;
  outline: none;
  color: #fff;
  background: #000000d4;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingAnimation} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
