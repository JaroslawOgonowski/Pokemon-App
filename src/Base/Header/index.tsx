import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Ball, Logo, StyledHeader, StyledNavLink, StyledNavigation } from "./styled";
import { Pokemon } from "../../Features/Pokemon";
import { MyTeam } from "../../Features/MyTeam";
import { Areas } from "../../Features/Areas";

interface HeaderProps {
  logoSrc: string;
  ballSrc: string;
  pokemonPath: string;
  myTeamPath: string;
  areasPath: string;
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ logoSrc, ballSrc, pokemonPath, myTeamPath, areasPath }) => {
  return (
    <>
      <StyledHeader>
        <Logo src={logoSrc} />
        <BrowserRouter>
          <StyledNavigation>
            <Link to={pokemonPath}><StyledNavLink>Pokemon</StyledNavLink></Link>
            <Link to={myTeamPath}><StyledNavLink>MyTeam</StyledNavLink></Link>
            <Link to={areasPath}><StyledNavLink>Areas</StyledNavLink></Link>
          </StyledNavigation>

          <Routes>
            <Route path={pokemonPath} element={<Pokemon />} />
            <Route path={myTeamPath} element={<MyTeam />} />
            <Route path={areasPath} element={<Areas />} />
          </Routes>
        </BrowserRouter>
      </StyledHeader>
      <Ball src={ballSrc} />
    </>
  )
}

Header.defaultProps = {
  pokemonPath: '/pokemon',
  myTeamPath: '/myteam',
  areasPath: '/areas',
  logoSrc: require("./images/International_Pokémon_logo.png"),
  ballSrc: require("./images/Poké_Ball_icon.png"),
}

Logo.defaultProps = {
  src: Header.defaultProps.logoSrc
}

Ball.defaultProps = {
  src: Header.defaultProps.ballSrc
}