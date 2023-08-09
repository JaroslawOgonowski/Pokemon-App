import styled from "styled-components";
import { ReactComponent as Star } from "../../../Favorite/star.svg";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0; 
    width: 68px;

  }
  to {
    opacity: 1;    
width: 150px;
  }
`; 

export const FavText = styled.div`
  width: 150px;
  margin-top: -2.5vh;
  margin-left: -2vh;
  transform: translateY(-50%);
  color: white;
  background-color: #0c0b0bdb;
  padding: 2vh;
  border-radius: 5px;
  text-align: center;
  z-index: -100;
  visibility: hidden;
`;

export const StyledAddToFav = styled.div`
  width: 5vh;
  height: 5vh;
  color: #948c8cdb;
  position: absolute;
  left: 12%;
  top: 32vh;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    color: #e9f420;

    ${FavText} {      
      visibility: visible;
      animation: ${fadeIn} 0.5s ease-in-out;
    }
  }
`;

export const StyledStar = styled(Star)`
  z-index: 10000;
  position: relative;
`;
