import styled from "styled-components";
import { ReactComponent as Pokeball } from "./pokeball-svgrepo-com.svg";

export const StyledLoader = styled.article`
  width: 60%;
  margin: 30vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
`;

export const LoadingText = styled.div`
  font-family: "Righteous", cursive;
  font-size: 5vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 36px;
  }
`;

export const StyledPokeball = styled(Pokeball)`
  width: 15vh;
  height: 15vh;
  animation: LoaderAnim 2s ease 0s infinite alternate forwards;
  margin-bottom: 5vh;
  @keyframes LoaderAnim {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
      color: #770808;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 80px;
    height: 80px;
    margin-bottom: 50px;
  }
`;
