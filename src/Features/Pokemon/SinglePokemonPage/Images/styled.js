import styled from "styled-components";

export const StyledImages = styled.div`
  margin-top: 2vw;
  width: 96%;
  display: flex;
  gap: 1vw;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const Subtitle = styled.h2`
  font-family: "Righteous", cursive;
  text-align: center;
  width: 100%;
  font-size: 3vw;
  color: #100414ce;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 22px;
  }
`;
