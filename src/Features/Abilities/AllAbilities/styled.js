import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAbilities = styled.div`
  margin-top: -13vh;
  background-image: linear-gradient(
    126deg,
    rgba(1, 3, 6, 1) 0%,
    rgba(58, 4, 46, 1) 100%
  );
  padding-bottom: 10vh;
`;

export const Title = styled.h2`
  padding-top: 6vh;
  width: 100%;
  text-align: center;
  font-size: 4vw;
  font-family: "Righteous", cursive;
  margin: 0 0 2vw 0;
  color: #b5d007;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 28px;
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
  background-color: #000000e1;
  color: #9d9ea3;
  border-radius: 1vw;
  transition: 300ms;

  &:hover {
    transform: scale(1.1);
    color: #bbbcc3;
    filter: brightness(150%);
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    padding: 10px;
    font-size: 18px;
  }
`;
