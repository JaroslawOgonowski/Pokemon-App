import styled from "styled-components";

export const StyledImageBox = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
gap: 0.5vw;
justify-content: center;
align-content: center;
padding: 2vw;
`;

export const Container = styled.div`
display: flex;
gap: 1vw;
justify-content: center;
align-content: center;
margin-bottom: 1vw;
`;

export const Image = styled.img`
height: 8vw;
transition: 500ms;
`;

export const ImagesDescription = styled.div`
font-size: 1.3vw;
font-weight: 600;
color: #262626;
text-align: center;
`;