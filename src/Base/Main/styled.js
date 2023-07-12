import styled from "styled-components";
import mainBG from "./cute-pikachu-6o-2560x1440.jpg"

export const StyledMain = styled.main`
  width: 100%;
  margin: 6vw auto 10vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: 80px auto;
  }
`;

export const MainBanner=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${mainBG});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

export const ArticleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(80% - 2vw);
  animation: articleColumnAnimation 0.5s ease;

  @keyframes articleColumnAnimation {
    0% {
      opacity: 0.5;
      transform: translateX(30vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 100%;
  }
`;
