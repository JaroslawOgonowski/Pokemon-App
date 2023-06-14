import styled from "styled-components";

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
  gap: 2vw;  
  margin: 0 auto;
  padding-bottom: 5vw;
  `
const BaseButton = styled.button`
cursor: pointer;
background-color: #040119dc;
color: white;
margin-top: 6vw;
position: sticky;
top: 20vw;
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
  background-color: #d3d2dd75;
  &:hover{
    transform: scale(1.0);
    filter: brightness(80%);
  }
}
`;

export const PrevButton = styled(BaseButton)``;

export const NextButton = styled(BaseButton)``;
