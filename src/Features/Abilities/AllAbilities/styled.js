import styled from "styled-components";

export const Title = styled.h2`
width: 100%;
text-align: center;
`;



export const AllAbilitiesContainer = styled.div`
width: 96%;
display: flex;
gap: 2%;
flex-wrap: wrap;
justify-content: space-evenly;
`;

export const Button = styled.button`
cursor: pointer;
height: 40vh;
width: 5%;
position: sticky;
top: 40%;
border: none;
background-color: ${({ theme })=>theme.color.headerColor};
color: white;
font-size: 4vw;
transition: 300ms;
border-radius: 1vw;
&:hover{
  transform: scale(1.05);
  filter: brightness(180%);
}
`;