import { FC, useEffect, useState } from "react";
import {
  LinkText,
  ListItem,
  SidebarTitle,
  StyledA,
  StyledSideBar,
} from "./styled";

export const SideBar = () => {
  const [sideBarOn, setSideBarOn] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleWindowResize = () => {
      setSideBarOn(window.innerWidth <= 550);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <SidebarTitle onClick={() => setSideBarOn(!sideBarOn)}>
        {sideBarOn ? "≡" : "×"}
      </SidebarTitle>
      <ListItem>
        <StyledA href="/Pokemon-App#/pokemon">Pokemon</StyledA>
      </ListItem>
      <ListItem>
        <StyledA href="/Pokemon-App#/randomTeam">Team</StyledA>
      </ListItem>
      <ListItem>
        <StyledA href="/Pokemon-App#/types">Pokemon Types</StyledA>
      </ListItem>
      <ListItem>
        <StyledA href="/Pokemon-App#/abilities">Pokemon Abilities</StyledA>
      </ListItem>
      <ListItem>
        <StyledA href="/Pokemon-App#/moves">All moves</StyledA>
      </ListItem>

      <StyledSideBar sideBarOn={sideBarOn}></StyledSideBar>
    </>
  );
};
