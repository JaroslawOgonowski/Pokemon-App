import { Logo, LogoLink, StyledHeader, StyledNavLink, StyledNavigation } from "./styled";
import logo from "./images/International_Pokémon_logo.png"
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;

  return (
    <>
      <StyledHeader>
        <LogoLink href="https://jaroslawogonowski.github.io/Pokemon-App/">
          <Logo src={logo} />
        </LogoLink>
        <StyledNavigation>
          <StyledNavLink to="/pokemon" activator={location.includes("/pokemonDetails") ? true : false}>
            Pokémon
          </StyledNavLink>
          <StyledNavLink to="/abilities" activator={location.includes("/ability") ? true : false}>Abilities</StyledNavLink>
          <StyledNavLink to="/moves" activator={location.includes("/move") ? true : false}>Moves</StyledNavLink>
        </StyledNavigation>
      </StyledHeader>
    </>
  );
};


