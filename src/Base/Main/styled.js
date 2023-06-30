import styled from "styled-components";

export const StyledMain = styled.main`
  width: 98%;
  margin: 8vw auto 10vh auto;
  display: flex;
  gap: 2vw;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: 80px auto;
    flex-direction: column;
  }
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
