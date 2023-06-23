import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 35px;
  background-color:  ${({ theme }) => theme.color.headerColor};
  color: white;
  font-size: 1.6vw;
  font-weight: 700;
  transition: 500ms;
  -webkit-box-shadow: 1px 9px 24px -6px rgba(67, 69, 88, 1);
  -moz-box-shadow: 1px 9px 24px -6px rgba(67, 69, 88, 1);
  box-shadow: 1px 9px 24px -6px rgba(67, 69, 88, 1);

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 13px;
  };

  &:hover{
    filter: brightness(180%);
    transform: scale(1.05);
  };
`;

export const ButtonText = styled.span`
  text-align: center;
  padding: 0.1vw;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    display: none;
  };  
`;

export const GameTitle = styled.h3`
  text-align: center;
  width: 60%;
  font-size: 3vw;
  font-weight: 700;

  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 20px;
  };

`;