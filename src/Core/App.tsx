import { GlobalStyle } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { normalTheme } from "./theme";
import { Header } from "../Base/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from "../Features/Pokemon";
import { MyTeam } from "../Features/MyTeam";
import { Areas } from "../Features/Areas";

function App() {
  return (
    <>
      <BrowserRouter>
      <ThemeProvider theme={normalTheme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/myteam" element={<MyTeam />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/" element={<Pokemon />} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
