import styled from "styled-components";
import mainBG from "./cute-pikachu-6o-2560x1440.jpg";

export const StyledMain = styled.main`
  width: 100%;
  margin: 6vw auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  justify-content: center;
  box-shadow: 1px 14px 58px 1px rgba(0, 0, 0, 1);
  animation: mainAnimation 0.5s ease;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: 80px auto 0 auto;
    @media (orientation: landscape) {
      margin: 40px auto 0 auto;
    }
  }

  @keyframes mainAnimation {
    0% {
      opacity: 0.5;
      transform: translateX(30vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const MainBanner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mainBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 550px) {
    flex-direction: column;
    min-height: 80vh;
    
  }
`;

export const ArticleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: calc(80% - 2vw);
  min-height: 80vh;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    justify-content: space-evenly;
  }
`;
