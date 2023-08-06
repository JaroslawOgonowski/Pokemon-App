import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  cursor: pointer;
  width: 10%;
  height: 0.2vh;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: "Agdasima", sans-serif;
  border-radius: 5px;
  color: white;
  font-size: 1.6vw;
  transition: 500ms;
  box-shadow: 0px 0px 12px 1px rgba(4, 46, 50, 1);
  background-image: linear-gradient(
    53deg,
    rgba(6, 6, 6, 1) 15%,
    rgba(14, 26, 66, 1) 100%
  );
  transition: 500ms;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 13px;
  }

  &:hover {
    filter: brightness(180%);
    height: 9vh;
    color: #c9c4c4;
  }
`;

export const ButtonText = styled.span`
  text-align: center;
  padding: 0.1vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    display: none;
  }
`;

export const GameTitle = styled.h3`
  text-align: center;
  width: 60%;
  font-size: 2.4vw;
  font-family: "Righteous", cursive;
  color: #a8a0a0e5;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 20px;
  }
`;

export const Table = styled.table`
  width: 85%;
  color: #baabab;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(229, 232, 207, 0.157);
  }

  &:hover {
    background-color: rgba(66, 90, 98, 0.705);
  }
`;

export const TableHeader = styled.th`
  border-bottom: 1px solid black;
  color: white;
  height: 3.2vw;
  background-color: rgba(25, 23, 23, 0.927);
  font-size: 1.2vw;
  font-family: "Righteous", cursive;
  letter-spacing: 0.1vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    height: 30px;
    font-size: 13px;
  }
`;

export const TableCell = styled.td`
  text-align: center;
  border-bottom: 1px solid black;
  height: 2.5vw;
  padding: 0.2vw;
  font-size: 1.2vw;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    height: 30px;
    font-size: 14px;
    padding: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    height: 25px;
    font-size: 11px;
    padding: 2px;
  }
`;

export const DetailLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 900;
  padding: 0.5vw;
  border-radius: 1vw;
  background-color: #1e1d1fba;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    padding: 4px;
  }
`;
