import styled from "styled-components";

export const GalleryTitle = styled.h2`
  width: 100%;
  font-size: 3vw;
  font-family: 'Righteous', cursive;
  color: ${({ theme }) => theme.color.titleFontColor};
  text-align: center;
  margin: 2vw 0;
  
  @media(max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 28px;
    margin: 20px 0;
  };
`;

export const GalleryBox = styled.div`
  width: 96%;
  margin: 0 auto;
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledGallery = styled.div`
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1vw;  
  margin: 0 auto;
  padding-bottom: 5vw;
  `;
  
const BaseButton = styled.button`
  cursor: pointer;
  background-color: #0401199e;
  color: white;
  margin-top: 6vw;
  position: sticky;
  height: 70vh;
  top: 20%;
  transition: 500ms;
  filter: brightness(80%);
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  
  &:hover{
  transform: scale(1.1);
  filter: brightness(120%);
  }

  &:disabled{
    cursor: not-allowed;
    background-color: #d3d2dd75;
    &:hover{
      transform: scale(1.0);
      filter: brightness(80%);
    }
  }
`;

export const PrevButton = styled(BaseButton)``;

export const NextButton = styled(BaseButton)``;
