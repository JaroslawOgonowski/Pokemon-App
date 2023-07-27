import styled from "styled-components";

export const RandomTeamPage = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 6vw auto;
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
    margin: 80px auto;
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
    margin: 20px 0;
  }
`;

export const PkmBox = styled.div`
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
