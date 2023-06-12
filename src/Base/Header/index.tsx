import { Ball, Logo, StyledHeader, StyledNavLink, StyledNavigation } from "./styled";
import logo from "./images/International_Pokémon_logo.png"
import ball from "./images/Poké_Ball_icon.png"
export const Header = () => {

  return (
    <>
      <StyledHeader>
        <StyledNavLink to="/">
          <Logo src={logo} />
        </StyledNavLink>
        <StyledNavigation>
          <StyledNavLink to="/pokemon">Pokémon</StyledNavLink>
          <StyledNavLink to="/myteam">MyTeam</StyledNavLink>
          <StyledNavLink to="/areas">Areas</StyledNavLink>
        </StyledNavigation>
      </StyledHeader>
      <Ball src={ball} />
    </>
  )
}
