import { readableColor } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";
import star from "../../../Favorite/star.svg"
export const Wrapper = styled.div`
  margin-top: 2vw;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const AddToFav = styled.div`
  width: 5vh;
  height: 5vh;
  z-index: 999;
  color: #948c8cdb;
  position: absolute;
  left: 10%;
  top: 200px;
  cursor: pointer;

  &:hover::before {
    content: "Add to favorite";
    position: absolute;
    left: 12%;
    top: 37%;
    transform: translateY(-50%); 
    color: #e9f420;
    width: 150px; 
    background-color: white; 
    padding: 5px; 
    border-radius: 5px; 
    text-align: center; 
    transition: all 0.3s ease; 
  }

  &:hover {
    color: #e9f420;
    width: 15vh;
  }
`;


export const CardImage = styled.div`
  width: 20vw;
  height: 20vw;
  align-self: center;
  background-image: linear-gradient(
    328deg,
    rgba(1, 4, 10, 0.523) 0%,
    rgba(1, 4, 10, 0.661) 40%,
    ${(props) => props.color} 100%
  );
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 25vw;
    height: 25vw;
    margin: 1vw 3vw 0 0;
    animation: fadeInOut 10s infinite;
    @keyframes fadeInOut {
      0% {
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      85% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
      width: 40vh;
      height: 40vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin-top: 30px;
    width: 30vh;
    height: 30vh;
    margin-bottom: 60px;
  }
`;
export const Traits = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1vw;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 100%;
  }
`;

export const Trait = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2vw;
  border: 1px solid #938b8b;
  border-radius: 1vw;
  padding: 1vw;
  color: #d7cece;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: 40%;
    font-size: 15px;
    padding: 10px;
  }
`;

export const Description = styled.div`
  width: calc(80% + 3vw);
  border: 1px solid #938b8b;
  border-radius: 1vw;
  padding: 1vw;
  color: #d7cece;
  font-size: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1vh;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    width: calc(80% + 26px);
    font-size: 15px;
    padding: 10px;
  }
`;

export const Generation = styled.div`
  font-size: 1.2vw;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
    padding: 10px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 11px;
  }
`;

export const ContentBox = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #cdc5c5;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Abilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    gap: 8px;
  }
`;

export const Ability = styled(Link)`
  text-decoration: none;
  font-family: "Righteous", cursive;
  margin: 0.5vw;
  padding: 0.5vw 2vw;
  border-radius: 1vw;
  font-size: 1.3vw;
  -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw ${(props) => props.color};
  -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw ${(props) => props.color};
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw ${(props) => props.color};
  background-color: ${(props) => props.color};
  color: ${(props) => readableColor(props.color, "#FFFFFF", "#000000")};
  transition: 300ms;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}px) {
    font-size: 18px;
    border-radius: 10px;
    padding: 2px 8px;
    margin: 0 2px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMin}px) {
    font-size: 11px;
    align-self: flex-end;
  }
`;
