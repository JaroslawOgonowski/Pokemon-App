import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2vw;
  width: 96%;
  display: flex;
  gap: 0;
`;


export const CardImage = styled.img`
  width: 30%;
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
  margin-top: 1vw;
  margin-bottom: 1vw;
`;

export const Description = styled.div`
  font-size: 1.3vw;
  color: #262626;
`;

export const Types = styled.div`
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