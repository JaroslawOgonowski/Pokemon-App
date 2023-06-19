import { readableColor } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2vw;
  width: 96%;
  display: flex;
  gap: 0;
`;

export const CardImage = styled.img`
  aspect-ratio: 1 / 1 ;
  width: 30%;
  height: 30%;
  min-width: 30%;
`;

export const RightBox = styled.div`
  width:100%;
  display: flex;
  gap: 1vw;
  border: 1px solid gray;
  -webkit-box-shadow: -21px 22px 58px -35px ${(props) => props.color};
  -moz-box-shadow: -21px 22px 58px -35px ${(props) => props.color};
  box-shadow: -21px 22px 58px -35px ${(props) => props.color};
`;

export const TextBox = styled.div`
  width: 70%;
  margin-left: 1vw;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Righteous', cursive;
  width: 100%;
  color: black;
  font-size: 3vw;
  text-transform: uppercase;
  margin: 1vw 0;
`;

export const Description = styled.div`
  font-size: 1.3vw;
  color: #262626;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1vw;
  margin: 1vw 0;
  font-family: 'Righteous', cursive;
`;

export const Types = styled.div`
  margin-left: 1vw;
  display: flex;
  gap: 1vw;
`;

export const Type = styled.div`
  padding: 0.5vw 2vw;
  border-radius: 1vw;
  font-size: 1.3vw;
  background-color:${(props) => props.typeBackgroundColor};
  color: ${(props) => props.typeFontColor};
  -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw ${(props) => props.typeBackgroundColor};
  -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba${(props) => props.typeBackgroundColor};
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw rgba${(props) => props.typeBackgroundColor};
`;

export const Generation = styled.div`
font-size: 1.2vw;
font-weight: 700;
`;

export const Ability = styled(Link)`
  text-decoration: none;
  font-family: 'Righteous', cursive;
  padding: 0.5vw 2vw;
  border-radius: 1vw;
  font-size: 1.3vw;
  -webkit-box-shadow: 0vw 0vw 0.6959vw 0.1099vw  ${(props) => props.color};
  -moz-box-shadow: 0vw 0vw 0.6959vw 0.1099vw  ${(props) => props.color};
  box-shadow: 0vw 0vw 0.6959vw 0.1099vw  ${(props) => props.color};
  background-color: ${(props) => props.color};
  color: ${(props) => readableColor(props.color, '#FFFFFF', '#000000')};
  transition: 300ms;

  &:hover{
    transform: scale(1.1);
    }
`;