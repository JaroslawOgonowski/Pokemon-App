import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 6vw;
  font-family: "Righteous", cursive;
  color: #ffffff00;
  text-align: center;
  margin: 2vw 0;
  background-color: rgba(6, 6, 6, 1);
  background-image: linear-gradient(
    50deg,
    rgba(6, 6, 6, 1) 0%,
    rgba(9, 20, 45, 1) 50%,
    rgba(27, 94, 138, 1) 100%
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
`;

export const TitleBox = styled.div`
  width: 96%;
  display: flex;
  gap: 6vw;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vw;
`;

export const PokemonImage = styled.img`
  width: 20%;
`;
