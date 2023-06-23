import { Logo, LogoLink, StyledHeader, StyledNavLink, StyledNavigation } from "./styled";
import logo from "./images/International_Pokémon_logo.png"
export const Header = () => {

  return (
    <>
      <StyledHeader>
        <LogoLink href="https://jaroslawogonowski.github.io/Pokemon-App/">
          <Logo src={logo} />
        </LogoLink>
        <StyledNavigation>
          <StyledNavLink to="/pokemon">Pokémon</StyledNavLink>
          <StyledNavLink to="/abilities">Abilities</StyledNavLink>
          <StyledNavLink to="/moves">Moves</StyledNavLink>
        </StyledNavigation>
      </StyledHeader>
    </>
  )
}
