import { GlobalStyle } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { normalTheme } from "./theme";
import { Header } from "../Base/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from "../Features/Pokemon";
import { Moves } from "../Features/Moves";
import { SinglePokemonPage } from "../Features/Pokemon/SinglePokemonPage";
import { Abilities } from "../Features/Abilities";
import { AbilityPage } from "../Features/Abilities/AbilityPage";

function App() {
  return (
    <>
      <HashRouter>
        <ThemeProvider theme={normalTheme}>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/abilities" element={<Abilities />} />
            <Route path="/moves" element={<Moves />} />
            <Route path="/pokemonDetails" element={<SinglePokemonPage />} />
            <Route path="/ability" element={<AbilityPage />} />
            <Route path="/" element={<Pokemon />} />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;
