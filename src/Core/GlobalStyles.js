import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
height: 1000px;
};
body{
margin: 0;
padding: 0;  
}

*, ::after, ::before {
  box-sizing: inherit;
};
`