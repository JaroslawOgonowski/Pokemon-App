import styled from "styled-components";

export const TopMarker = styled.div`
  position: relative;
  top: -10vh;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    top: -13vh;
  }
`;

export const GalleryTitle = styled.h2`
  width: 100%;
  font-size: 3vw;
  font-family: "Righteous", cursive;
  color: ${({ theme }) => theme.color.titleFontColor};
  text-align: center;
  margin: 2vw 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 28px;
    margin: 20px 0;
  }
`;

export const GalleryBox = styled.div`
  width: 96%;
  margin: 0 auto;
  display: flex;
  gap: 1vw;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
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

export const ButtonBox = styled.div`
  height: 70vh;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 6vw;
  position: sticky;
  top: 20%;
`;

export const BaseButton = styled.button`
  cursor: pointer;
  height: 55vh;
  width: 3vw;
  background-color: #0401199e;
  color: white;
  transition: 200ms;
  filter: brightness(80%);
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  transition: visibility 0;
  padding: 0.2vw;
  &:hover {
    filter: brightness(130%);
    background-color: #28052fd1;
  }

  &:disabled {
    visibility: hidden;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 5vw;
  }
`;

export const FastButton = styled(BaseButton)`
  height: 15vh;
  width: 3vw;
  padding: 0.2vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 5vw;
  }
`;
