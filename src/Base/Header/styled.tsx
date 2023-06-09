import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: #020F24DF;
`;

export const Logo =  styled.img`
  cursor: pointer;
  transition: 500ms;

  &:hover{
    transform: scale(1.05);
  }
`;

export const Ball = styled.img`
  cursor: pointer;
  margin-top: 200px;
  margin-left: 150px;
  width: 100px;
  transition: 500ms;
  
  &:hover{
    animation: rotate-vert-center ease infinite 3s;
  }

  @keyframes rotate-vert-center {
    0% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
`;