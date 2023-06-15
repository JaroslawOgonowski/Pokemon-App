import styled from "styled-components";

export const StyledMain = styled.main`
  width: 98%;
  margin: 8vw auto;
  display: flex;
  gap: 2vw;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ArticleColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(80% - 2vw);
  animation: articleColumnAnimation 0.5s ease;

  @keyframes articleColumnAnimation {
	  0% {
		  opacity: 0.5;
		  transform: translateX(30vw);
	  }
	  100% {
		  opacity: 1;
		  transform: translateX(0);
	  }
  }
`;

export const TitleBox = styled.div`
width: 96%;
display: flex;
gap: 6vw;
align-items: center;
justify-content: center;
margin-bottom: 2vw;
`;

export const PokemonImage = styled.img`
height: 100%;
`;