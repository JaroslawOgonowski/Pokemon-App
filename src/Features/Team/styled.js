import styled from "styled-components";
import { keyframes } from "styled-components";
import banner from "./2022-TC-Web-banner-Pikachu-5.png";

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

export const TitleBanner = styled.h1`
  width: 100%;
  height: 20vh;
  margin: 0;
  padding-right: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 3vw;
  font-family: "Righteous", cursive;
  color: #e0d4d4;
  background-image: url(${banner});
  background-position-y: 80%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 28px;
    background-position-x: 100%;
    padding-right: 0;
    justify-content: center;
  }
  @media (max-width: 400px) {
    max-width: 100%;
    padding-left: 16px;
  }
`;

export const Title = styled.h2`
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

export const TeamBox = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  justify-content: center;
  align-items: center;
`;

export const PkmBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1vh;
  justify-content: center;
  align-items: center;
`;

export const StyledTeam = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  gap: 8vh;
  justify-content: center;
  align-items: center;
`;

export const TeamImage = styled.img`
  width: 13%;
  padding: 1vh;
  height: auto;
  border: 1px solid black;
  border-radius: 1rem;
`;

const glowingAnimationGenerate = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;

export const GenerateButton = styled.button`
  width: 50%;
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
    animation: ${glowingAnimationGenerate} 20s linear infinite;
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

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 80%;
    font-size: 18px;
  }
`;

const glowingAnimation = keyframes`
    0% { transform: skewX(45deg) translate(0); }
    100% { transform: skewX(45deg) translate(200px); }
`;

export const SaveButton = styled.button`
  width: 200px;
  height: 40px;
  font-family: "Righteous", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: none;
  border-radius: 30px;
  background: linear-gradient(
    135deg,
    ${(props) => (props.isSaved ? "#9c27b0" : "#0cbc0c")},
    ${(props) => (props.isSaved ? "#6a0080" : "#106b16")}
  );
  box-shadow: 0 6px 20px rgba(27, 94, 32, 0.3);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    z-index: -1;
    transition: 0.2s;
  }

  &:before {
    top: 2px;
    left: 2px;
  }

  &:after {
    bottom: 2px;
    right: 2px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(27, 94, 32, 0.4);

    &:before,
    &:after {
      background: rgba(255, 255, 255, 0.081);
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 3px 10px rgba(27, 94, 32, 0.4);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skewX(45deg) translate(0);
    transition: 0.5s;
    filter: blur(0px);
  }

  &:hover::before {
    transform: skewX(45deg) translate(200px);
  }
`;

export const DeleteButton = styled(SaveButton)`
  background: linear-gradient(135deg, #ff4040, #a10b0b);
  box-shadow: 0 6px 20px rgba(161, 11, 11, 0.3);

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
