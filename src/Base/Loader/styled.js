import styled from "styled-components";
import { ReactComponent as Pokeball } from "./pokeball-svgrepo-com.svg";

export const StyledLoader = styled.article`
width: 60%;
margin: 20% auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10%;
`;

export const LoadingText = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 3vw;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 30px;
  };
`;

export const StyledPokeball = styled(Pokeball)`
  animation: LoaderAnim 2s ease 0s infinite alternate forwards;
  margin-bottom: 50px;
  @keyframes LoaderAnim {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
      color: #770808;
    }
  }
`;

