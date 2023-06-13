import styled from "styled-components"
import { css } from "styled-components";

export const FlexBox = styled.div`
display: flex;
flex-direction: column;
`;

export const StyledArticle = styled.article`
  font-size: 1.2vw;
  order: 1
 ;

  ${({ hideFullText }) => hideFullText && css`
    display: none;
   `}  
`;

export const ReadMoreButton = styled.button`
  cursor: pointer;
  width: 20%;
  margin-top: 2vw;
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

  ${({ hideFullText }) => !hideFullText && css`
    order:2; 
   `}  
`;