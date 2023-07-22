import styled from "styled-components";

export const Title = styled.h2`
  padding-top: 2vh;
  width: 100%;
  text-align: center;
  font-size: 4vw;
  font-family: "Righteous", cursive;
  margin: 0 0 2vw 0;
  background-image: linear-gradient(
  45deg,
  rgba(109, 100, 100, 1) 0%,
  rgba(211, 204, 204, 1) 100%
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
    font-size: 24px;
  }
`;
