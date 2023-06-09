import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components"
import { theme } from "./theme";
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>aaaa</div>
    </ThemeProvider>
    </>
  );
}

export default App;
