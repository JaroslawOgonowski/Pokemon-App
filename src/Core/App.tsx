import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { normalTheme } from "./theme";
import { Header } from "../Base/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from "../Features/Pokemon";
import { Moves } from "../Features/Moves";
import { SinglePokemonPage } from "../Features/Pokemon/SinglePokemonPage";
import { Abilities } from "../Features/Abilities";
import { AbilityPage } from "../Features/Abilities/AbilityPage";
import ScrollToTopButton from "../Base/ScrollToTopButton/ScrollToTop ";
import { MovePage } from "../Features/Moves/MovePage";
import { StyledPage } from "./styled";
import { TypesPage } from "../Features/Types";
import { TypePage } from "../Features/Types/TypePage";

function App() {
  return (
    <StyledPage>
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
            <Route path="/move" element={<MovePage />} />
            <Route path="/types" element={<TypesPage />} />
            <Route path="/type" element={<TypePage />} />
            <Route path="/" element={<Pokemon />} />
          </Routes>
          <ScrollToTopButton />
        </ThemeProvider>
      </HashRouter>
    </StyledPage>
  );
}

export default App;
