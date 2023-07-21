import {
  Logo,
  LogoLink,
  StyledHeader,
  StyledNavLink,
  StyledNavigation,
} from "./styled";
import logo from "./images/International_Pokémon_logo.png";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;
  const activator = "true";

  const activeLink = () => {
    if (location.includes("/abilities")) {
      return (
        <StyledNavLink
          to="/abilities"
          activator={location.includes("/abilities") ? activator : null}
        >
          Abilities
        </StyledNavLink>
      );
       } else if (location.includes("/ability")) {
        return (
          <StyledNavLink
            to="/abilities"
            activator={location.includes("/ability") ? activator : null}
          >
            Abilities
          </StyledNavLink>
        );
    } else if (location.includes("/move")) {
      return (
        <StyledNavLink
          to="/moves"
          activator={location.includes("/move") ? activator : null}
        >
          Moves
        </StyledNavLink>
      );
    } else
      return (
        <StyledNavLink
          to="/types"
          activator={location.includes("/type") ? activator : null}
        >
          Types
        </StyledNavLink>
      );
  };

  return (
    <>
      <StyledHeader>
        <LogoLink href="https://jaroslawogonowski.github.io/Pokemon-App/">
          <Logo src={logo} />
        </LogoLink>
        <StyledNavigation>
          <StyledNavLink
            to="/pokemon"
            activator={location.includes("/pokemonDetails") ? activator : null}
          >
            Pokémon
          </StyledNavLink>
          {activeLink()}
        </StyledNavigation>
      </StyledHeader>
    </>
  );
};
