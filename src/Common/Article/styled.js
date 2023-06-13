import styled from "styled-components"
import { css } from "styled-components";

export const StyledArticle = styled.article`
  font-size: 1.2vw;
  ${({ hideFullText }) => hideFullText && css`
    display: none;
   `}
`;

export const ReadMoreButton = styled.button`
  cursor: pointer;
  width: 20%;
  border: none;
  background-color: transparent;
  align-self: flex-end;
  font-family: 'Righteous', cursive;
  font-size: 1.3vw;
  transition: 500ms;
  color: ${({ theme }) => theme.color.headerColor};
  &:hover{
    transform: scale(1.1);
    filter: brightness(400%);
  }
`;