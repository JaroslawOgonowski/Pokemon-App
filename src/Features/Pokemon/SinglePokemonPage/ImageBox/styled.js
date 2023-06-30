import styled from "styled-components";

export const StyledImageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  justify-content: center;
  align-content: center;
  padding: 2vw;
  margin-bottom: 5vw;
`;

export const Container = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-content: center;
  margin-bottom: 1vw;
`;

export const Image = styled.img`
  height: 8vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    height: 80px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 60px;
  }
`;

export const ImagesDescription = styled.div`
  font-size: 1.3vw;
  font-weight: 600;
  color: #262626;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 1.5vw;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 2.5vw;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 3vw;
  }
`;
