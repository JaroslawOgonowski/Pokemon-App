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
import { StyledPage, StyledRoutes } from "./styled";
import { TypesPage } from "../Features/Types";
import { TypePage } from "../Features/Types/TypePage";
import { Footer } from "../Base/Footer";
import { Team } from "../Features/Team";
import { SideBar } from "../Base/SideBar";
import { Favorite } from "../Features/Favorite";
import { SidebarProvider } from "./SideBarContext";
import { MainContent } from "../Base/MainContent";

function App() {
  return (
    <StyledPage>
      <HashRouter>
        <ThemeProvider theme={normalTheme}>
          <GlobalStyle />
          <Header />
          <SidebarProvider>
            <SideBar />
            <MainContent>
              <Routes>
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/abilities" element={<Abilities />} />
                <Route path="/moves" element={<Moves />} />
                <Route path="/pokemonDetails" element={<SinglePokemonPage />} />
                <Route path="/ability" element={<AbilityPage />} />
                <Route path="/move" element={<MovePage />} />
                <Route path="/types" element={<TypesPage />} />
                <Route path="/type" element={<TypePage />} />
                <Route path="/randomTeam" element={<Team />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/" element={<Pokemon />} />
              </Routes>
            </MainContent>
          </SidebarProvider>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </HashRouter>
    </StyledPage>
  );
}

export default App;
