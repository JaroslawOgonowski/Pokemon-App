import { Ball, Logo, StyledHeader, StyledNavLink, StyledNavigation } from "./styled";
import logo from "./images/International_Pokémon_logo.png"
export const Header = () => {

  return (
    <>
      <StyledHeader>
        <StyledNavLink logo={true} to="/">
          <Logo src={logo} />
        </StyledNavLink>
        <StyledNavigation>
          <StyledNavLink to="/pokemon">Pokémon</StyledNavLink>
          <StyledNavLink to="/myteam">MyTeam</StyledNavLink>
          <StyledNavLink to="/areas">Areas</StyledNavLink>
        </StyledNavigation>
      </StyledHeader>
    </>
  )
}
