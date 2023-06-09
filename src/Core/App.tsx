import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components"
import { normalTheme } from "./theme";
function App() {
  return (
    <>
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <div>aaaa</div>
    </ThemeProvider>
    </>
  );
}

export default App;
