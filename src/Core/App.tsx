import { GlobalStyle } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { normalTheme } from "./theme";
import { Header } from "../Base/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from "../Features/Pokemon";
import { Areas } from "../Features/Areas";
import { SinglePokemonPage } from "../Features/Pokemon/SinglePokemonPage";
import { Abilities } from "../Features/Abilities";

function App() {
  return (
    <>
      <HashRouter>
        <ThemeProvider theme={normalTheme}>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/Abilities" element={<Abilities />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/pokemonDetails" element={<SinglePokemonPage />} />
            <Route path="/" element={<Pokemon />} />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
