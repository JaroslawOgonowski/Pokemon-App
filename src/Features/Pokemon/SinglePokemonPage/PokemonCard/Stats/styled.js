import styled from "styled-components";

export const StatsBox = styled.div`
  font-family: "Righteous", cursive;
  font-size: 2vw;
  margin: 1vw;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 100%;
  }
`;

export const StatValue = styled.div`
  height: 1vw;
  margin-bottom: 0.5vw;
  background-color: red;
  border-radius: 0.3vw;
  font-size: 1vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    height: 12px;
  }
`;

export const FullBar = styled.div`
  width: calc(96%-1.2vw);
  padding: 0.5vw 0.6vw;
  border: 1px solid black;
  text-align: center;
  border-radius: 0.1vw;
  font-size: 1vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 1.5vw;
    padding: 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 2vw;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 2.5vw;
  }

  &:first-child {
    ${StatValue} {
      width: calc((${(props) => props.statvalue} / 255) * 100%);
      background-color: red;
      -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(214, 25, 25, 1);
      -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(214, 25, 25, 1);
      box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(214, 25, 25, 1);
    }
  }

  &:nth-child(2) {
    ${StatValue} {
      width: calc((${(props) => props.statvalue} / 181) * 100%);
      background-color: #ea860c;
      -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(245, 126, 15, 1);
      -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(245, 126, 15, 1);
      box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(245, 126, 15, 1);
    }
  }

  &:nth-child(3) {
    ${StatValue} {
      width: calc((${(props) => props.statvalue} / 250) * 100%);
      background-color: #e2f042;
      -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(218, 245, 15, 1);
      -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(218, 245, 15, 1);
      box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(218, 245, 15, 1);
    }
  }

  &:nth-child(4) {
    ${StatValue} {
      width: calc((${(props) => props.statvalue} / 194) * 100%);
      background-color: #2778c9;
      -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(22, 90, 210, 1);
      -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(22, 90, 210, 1);
      box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(22, 90, 210, 1);
    }
  }

  &:nth-child(5) {
    ${StatValue} {
      width: calc((${(props) => props.statvalue} / 230) * 100%);
      background-color: #2fb938;
      -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(39, 208, 0, 1);
      -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(39, 208, 0, 1);
      box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(39, 208, 0, 1);
    }
  }

  &:nth-child(6) {
    ${StatValue} {
      width: calc((${(props) => props.statvalue} / 200) * 100%);
      background-color: #d051c5;
      -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(241, 64, 228, 1);
      -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(241, 64, 228, 1);
      box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(241, 64, 228, 1);
    }
  }
`;

export const TotalStatValue = styled.div`
  width: calc((${(props) => props.statvalue} / 780) * 100%);
  height: 1vw;
  background-image: linear-gradient(
    326deg,
    rgba(61, 8, 66, 1) 0%,
    rgba(53, 11, 44, 1) 100%
  );
  border-radius: 0.3vw;
  margin-bottom: 0.5vw;
  -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(51, 3, 48, 1);
  -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(51, 3, 48, 1);
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba(51, 3, 48, 1);

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 1.5vw;
    padding: 4px;
    margin-top: 2px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 2vw;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 2.5vw;
  }
`;
