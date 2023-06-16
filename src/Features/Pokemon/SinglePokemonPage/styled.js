import styled from "styled-components";

export const StyledPokemonPage = styled.div`
margin: 6vw auto 0 auto;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(90deg, ${(props) => props.color} 0%, rgba(0, 0, 0, 0) 0.5%, rgba(0, 0, 0, 0) 99.5%, ${(props) => props.color} 100%);
`;


export const Subtitle = styled.h2`
  font-family: 'Righteous', cursive;
  text-align: center;
  width: 100%;
  font-size: 3vw;
  color: #100414ce;
`;

export const Imagesdsadas = styled.div`
color: rgb(55, 14, 46)
`;