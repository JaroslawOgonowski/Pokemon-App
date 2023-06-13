import styled from "styled-components";

export const StyledMain = styled.main`
width: 98%;
margin: 8vw auto;
display: flex;
gap: 2vw;
justify-content: center;
`

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
`