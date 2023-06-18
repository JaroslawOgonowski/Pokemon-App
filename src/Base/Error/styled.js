import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorPage = styled.article`
  margin: 0 auto;
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vw;
`;

export const ErrorTitle = styled.h2`
  font-family: 'Righteous', cursive;
  font-size: 3vw;
`;

export const Box = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.div`
  text-align: center;
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

  &:hover{
    transform: scale(1.1);
    filter: brightness(150%);
  }
`;