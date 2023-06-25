import { createGlobalStyle } from "styled-components";
import bg from "./background.jpg"
export const GlobalStyle = createGlobalStyle`

html {
  font-family: 'Comic Neue', cursive;;
};
body{
  margin: 0;
  padding: 0;  
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 50%;
}

*, ::after, ::before {
  box-sizing: inherit;
};
`