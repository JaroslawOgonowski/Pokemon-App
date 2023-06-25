import styled from "styled-components";

export const StyledAbilityPage = styled.div`
  width: 96%;
  margin: 18vh auto 5vh auto;
  display: flex;
  flex-direction: column;
`;

export const GenInfo = styled.div`
  color: #4B4B4B;
  font-size: 1.3vw;

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 13px;    
  };
`;

export const Description = styled.div`
  width: 100%;
  text-align: center;
  margin: 2vw 0;
  font-size: 2vw;

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 16px;    
  };
`;


export const PokeAbility = styled.div`
  margin-left: 3vw;
  display: flex;
  flex-wrap: wrap;
  gap: 2vh 1%;
  justify-content: flex-start;

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    margin-left: 6vw;
  };
`;