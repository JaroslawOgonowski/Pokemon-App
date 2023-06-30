import styled from "styled-components";
import { css } from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledArticle = styled.article`
  font-size: 1.3vw;
  order: 1;
  font-weight: 600;

  ${({ hideFullText }) =>
    hideFullText &&
    css`
      display: none;
    `};

  @media (max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    font-size: 1.8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 2.2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
    margin: 0 8px;
  }
`;

export const ReadMoreButton = styled.button`
  cursor: pointer;
  width: 20%;
  margin-top: 2vw;
  border: none;
  background-color: transparent;
  align-self: flex-end;
  font-family: "Righteous", cursive;
  font-size: 1.3vw;
  transition: 500ms;
  color: ${({ theme }) => theme.color.headerColor};
  &:hover {
    transform: scale(1.1);
    filter: brightness(400%);
  }

  ${({ hideFullText }) =>
    !hideFullText &&
    css`
      order: 2;
    `}

  @media(max-width: ${({ theme }) => theme.breakPoint.laptop}px) {
    font-size: 1.8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 2.2vw;
    width: 30%;
    margin: 24px 8px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    width: 60%;
  }
`;
