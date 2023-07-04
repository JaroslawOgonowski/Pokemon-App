import { createGlobalStyle } from "styled-components";
import bg from "./background.jpg";
export const GlobalStyle = createGlobalStyle`

html {
  font-family: 'Agdasima', sans-serif;

};

body{
  margin: 0;
  padding: 0;  
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 30%;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
}

*, ::after, ::before {
  box-sizing: inherit;
};

body, html {
overflow-x: hidden;
}

`;
