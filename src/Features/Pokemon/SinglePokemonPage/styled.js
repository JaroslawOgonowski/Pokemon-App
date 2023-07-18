import styled from "styled-components";

export const StyledPokemonPage = styled.div`
  margin: 0 auto;
  padding-top: 6vw;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.color} 0%,
    rgba(251, 249, 249, 0.986) 5%,
    rgba(251, 249, 249, 0.986) 95%,
    ${(props) => props.color} 100%
  );

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    padding-top: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    padding-top: 90px;
  }
`;
