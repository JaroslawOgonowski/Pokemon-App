import styled from "styled-components";

export const StyledImages = styled.div`
  margin-top: 2vw;
  width: 90%;
  display: flex;
  gap: 1vw;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  border-radius: 1vw;
  margin-bottom: 20vh;
`;

export const Subtitle = styled.h2`
  font-family: "Righteous", cursive;
  text-align: center;
  width: 100%;
  font-size: 3vw;
  color: #d0c7d3ff;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 22px;
  }
`;
