import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components"
import { normalTheme } from "./theme";
import { Header } from "../Base/Header";
function App() {
  return (
    <>
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <Header
      pokemonPath='/pokemon'
      myTeamPath='/myteam'
      areasPath='/areas'
      logoSrc={require("../Base/Header/images/International_Pokémon_logo.png")}
      ballSrc={require("../Base/Header/images/Poké_Ball_icon.png")}
      />
    </ThemeProvider>
    </>
  );
}

export default App;
