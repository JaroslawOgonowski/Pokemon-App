import styled, { css } from "styled-components";

export const Types = styled.div`
  margin-left: 1vw;
  display: flex;
  gap: 1vw;
  flex-wrap: wrap;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    flex-direction: column;
    gap: 0;
  };

  ${({ table }) => table && css`
  justify-content: center;
  `};
`;

export const Type = styled.div`
  padding: 0.5vw 2vw;
  border-radius: 1vw;
  font-size: 1.3vw;
  justify-content: center;
  text-transform: uppercase;
  font-family: 'Righteous', cursive;
  margin: 1vw 0;
  text-align: center;
  background-color:${(props) => props.typeBackgroundColor};
  color: ${(props) => props.typeFontColor};
  -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw ${(props) => props.typeBackgroundColor};
  -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba${(props) => props.typeBackgroundColor};
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba${(props) => props.typeBackgroundColor};

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 20px;
    border-radius: 10px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 18px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 11px;
  };
`;
