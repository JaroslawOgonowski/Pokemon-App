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
    } else if (location.includes("/type")) {
      return (
        <StyledNavLink
          to="/types"
          activator={location.includes("types") ? activator : null}
        >
          Types
        </StyledNavLink>
      );
    } else if (location.includes("/randomTeam")) {
      return (
        <StyledNavLink
          to="/randomTeam"
          activator={location.includes("randomTeam") ? activator : null}
        >
          Team
        </StyledNavLink>
      );
    } else
      return (
        <StyledNavLink
          to="/pokemon"
          activator={location.includes("/pokemon") ? activator : null}
        >
          Pokemon
        </StyledNavLink>
      );
  };

  return (
    <>
      <StyledHeader>
        <LogoLink href="https://jaroslawogonowski.github.io/Pokemon-App/">
          <Logo src={logo} />
        </LogoLink>
        <StyledNavigation>{activeLink()}</StyledNavigation>
      </StyledHeader>
    </>
  );
};
