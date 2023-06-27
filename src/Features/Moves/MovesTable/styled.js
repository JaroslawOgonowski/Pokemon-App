import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const TableMarker = styled.div`
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 96%;
  height: 6vh;
  margin: 0 auto;
  justify-content: center; 
  padding-bottom: 2vw;
  position: sticky;
  top: 6.5vw;
  left: 2%;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    top: 80px;
    padding-bottom: 3.2vw;
  };
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 7vh;
  font-family: 'Righteous', cursive;
  font-size: 5vh;
  background-color: rgba(25, 23, 23, 0.927);
  color: white; 
  transition: 400ms;
  &:hover{
    filter: brightness(200%);
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 13px;
  };
`;

export const Table = styled.table`
  font-family: 'Righteous', cursive;
  border-collapse: collapse;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 96%;
  margin: 0 auto;
  font-size: 1.3vw;
  margin-bottom: 4vw;
`;

export const TableRow = styled.tr`
 &:nth-child(odd) {
    background-color: rgba(229, 232, 207, 0.809);
  }; 
  
  &:hover{
    background-color: rgba(121, 208, 237, 0.705);
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 98%;
  };
`;

export const TableCell = styled.td`
  text-align: center;
  border-bottom: 1px solid black;
  height: 2.5vw;
  padding: 0.5vw;
  font-size: 1.2vw;
  font-weight: 600;

  ${({ mobileHidden }) => mobileHidden && css`
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
   display: none;
    };  
  `}

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 11px;
    padding: 0.5vw 4px;
  };
`;

export const TableHead = styled.th`
  border-bottom: 1px solid black;
  color: white;
  height: 5vh;
  background-color: rgba(25, 23, 23, 0.927);
  font-size: 1.2vw;
  letter-spacing: 0.1vw; 
  position: sticky;
  top: calc(7vw + 7.2vh);
  left: 2%;
  
  ${({ mobileHidden }) => mobileHidden && css`
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
   display: none;
    };  
  `}

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 13px;
    font-weight: 200;
    top: calc(7vw + 7.3vh);
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 13px;
    top: calc(7.6vh + 80px);
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    height: 30px;
    font-size: 12px;
  };
`;

export const DmgImg = styled.img`
@media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 30px;
  };
`;

export const MoveName = styled(Link)`
  text-decoration: none;
  font-size: 1.4vw;
  color: black;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 13px;
  };
`;

export const Ailment = styled.div`
  text-align: center;
  padding: 3% 0;
  border-radius: 0.6vw;
  background-color: red;
  margin: 0 1vw;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin: 0 16px;
  };
`;

export const Burn = styled(Ailment)`
  color: white;
  background-color: red;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw red;
`;

export const Freeze = styled(Ailment)`
  color: white;
  background-color: #53cfe0;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw #53cfe0;
`;

export const Confusion = styled(Ailment)`
  color: white;
  background-color: #695b67;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw #695b67;
`;

export const Paralysis = styled(Ailment)`
  color: black;
  background-color: #eaf429;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw #eaf429;
`;

export const Trap = styled(Ailment)`
  color: white;
  background-color: #1d1e18;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw #40403d;
`;

export const Poison = styled(Ailment)`
  color: black;
  background-color: #912186;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw #912186;
`;

export const Sleep = styled(Ailment)`
  color: white;
  background-color: #ff196d;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw #ff196d;
`;

export const Disable = styled(Ailment)`
  color: white;
  background-color: #351276;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw #351276;
`;

export const LeechSeed = styled(Ailment)`
  color: white;
  background-color: #41aa09;
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw #41aa09;
`;