import styled from "styled-components";

export const StyledPokemonPage = styled.div`
margin: 6vw auto 0 auto;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(90deg, ${(props) => props.color} 0%, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 0) 98%, ${(props) => props.color} 100%);
`;

export const Title = styled.h1`
  font-family: 'Righteous', cursive;
  text-align: center;
  width: 100%;
  color: black;
  font-size: 3vw;
  text-transform: uppercase;
  margin-top: 4vw;
  margin-bottom: 1vw;
`;

export const Description = styled.div`
text-align: center;
font-size: 1.3vw;
color: #262626;
margin: 0 1vw;
`;

export const Subtitle = styled.h2`
  font-family: 'Righteous', cursive;
  text-align: center;
  width: 100%;
  font-size: 3vw;
  color: #100414ce;
`;

export const Imagesdsadas = styled.div`

`;