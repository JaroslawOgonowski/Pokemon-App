import styled from "styled-components";

export const StyledAbilityPage = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 18vh;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    188deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(12, 17, 26, 1) 62%,
    rgba(13, 14, 15, 1) 100%
  );
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  border-radius: 1vw;
  color: white;
`;

export const GenInfo = styled.div`
  color: #bbb6b6;
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
