import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components"
import { normalTheme } from "./theme";
import { Header } from "../Base/Header";
function App() {
  return (
    <>
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <Header/>
    </ThemeProvider>
    </>
  );
}

export default App;
