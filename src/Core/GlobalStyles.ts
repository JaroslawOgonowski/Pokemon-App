import { createGlobalStyle } from "styled-components";
import bg from "./background.jpg";
export const GlobalStyle = createGlobalStyle`

html {
  font-family: 'Agdasima', sans-serif;

};

body{
  margin: 0;
  padding: 0; 
  background-image: linear-gradient(90deg, rgba(235, 216, 26, 0.99) 0%, rgba(144, 94, 9, 1) 100%);
  background-size: 200% 200%;
  animation: gradientAnimation 10s ease-in-out infinite;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}

*, ::after, ::before {
  box-sizing: inherit;
};

body, html {
overflow-x: hidden;
}
`;
