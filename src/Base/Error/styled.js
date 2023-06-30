import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorPage = styled.article`
  margin: 10vw auto 5vw auto;
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    margin-top: 100px;
  }
`;

export const ErrorTitle = styled.h2`
  font-family: "Righteous", cursive;
  font-size: 3vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 30px;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  align-items: center;
  font-size: 1.6vw;
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
    flex-wrap: wrap;
  }
`;

export const ErrorText = styled.div`
  text-align: center;
  margin: 2vw 0;
  width: 60%;
  font-size: 1.6vw;
`;

export const Image = styled.img`
  width: 15vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 15%;
  }

  @media (max-width: 550px) {
    width: 50%;
  }
`;

export const StyledNavLink = styled(Link)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.headerColor};
  color: white;
  text-decoration: none;
  padding: 1vw;
  margin-top: 2vw;
  border-radius: 10px;
  transition: 300ms;
  font-size: 1.6vw;
  &:hover {
    transform: scale(1.1);
    filter: brightness(150%);
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    padding: 20px;
  }
`;
