import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAbilities = styled.div`
  margin-top: -8vh;
`;

export const Title = styled.h2`
  padding-top: 12vh;
  width: 100%;
  text-align: center;
  font-size: 4vw;
  font-family: "Righteous", cursive;
  margin: 0 0 2vw 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 24px;
  }
`;

export const AllAbilitiesContainer = styled.div`
  width: 96%;
  margin: 0 auto;
  display: flex;
  gap: 1%;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 40vh;
  width: 5%;
  position: sticky;
  top: 40%;
  border: none;
  background-color: ${({ theme }) => theme.color.headerColor};
  color: white;
  font-size: 4vw;
  transition: 300ms;
  border-radius: 1vw;
  &:hover {
    transform: scale(1.05);
    filter: brightness(180%);
  }
  &:disabled {
    visibility: hidden;
  }
`;

export const AbilityList = styled.ul`
  width: 75%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    gap: 8px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const AbilityItem = styled.li`
  cursor: pointer;
  padding: 1vw;
  font-size: 3vw;
  font-family: "Righteous", cursive;
  background-color: #100d0de1;
  color: white;
  border-radius: 1vw;
  transition: 300ms;

  &:hover {
    transform: scale(1.1);
    background-color: #060505f0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    padding: 10px;
    font-size: 18px;
  }
`;
