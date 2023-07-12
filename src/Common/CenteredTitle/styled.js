import styled from "styled-components";

export const Title = styled.h2`
  padding-top: 2vh;
  width: 100%;
  text-align: center;
  font-size: 4vw;
  font-family: "Righteous", cursive;
  margin: 0 0 2vw 0;
  color: #c8bdbd;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 24px;
  }
`;
