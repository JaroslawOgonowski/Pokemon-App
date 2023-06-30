import styled from "styled-components";

export const StyledAbilityPage = styled.div`
  width: 96%;
  margin: 18vh auto 5vh auto;
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  border-radius: 1vw;
  border: 0.3vw solid #1d74c1;
`;

export const GenInfo = styled.div`
  color: #4b4b4b;
  font-size: 1.3vw;
  align-self: flex-end;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 13px;
  }
`;

export const Description = styled.div`
  width: 100%;
  margin: 2vw 1vw;
  font-size: 2vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 16px;
  }
`;

export const PokeAbility = styled.div`
  margin-left: 3vw;
  display: flex;
  flex-wrap: wrap;
  gap: 2vh 1%;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    margin-left: 6vw;
  }
`;
