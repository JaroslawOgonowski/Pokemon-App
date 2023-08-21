import { useState } from "react";
import { ListItem, SidebarTitle, StyledA, StyledSideBar } from "./styled";

export const SideBar = () => {
  const sideBarOnScreenWidth = () => {
    if (window.innerWidth >= 767) return false;
    else return true;
  };

  const [sideBarOn, setSideBarOn] = useState(sideBarOnScreenWidth());

  const sidebarOnClick = () => {
    if (window.innerWidth <= 767) {
      setSideBarOn(!sideBarOn);
    } else return;
  };

  return (
    <>
      <SidebarTitle
        sideBarOn={!sideBarOn}
        onClick={() => setSideBarOn(!sideBarOn)}
      >
        {sideBarOn ? "≡" : "×"}
      </SidebarTitle>
      <StyledSideBar sideBarOn={sideBarOn}>
        <ListItem>
          <StyledA
            onClick={() => sidebarOnClick}
            href="/Pokemon-App#/pokemon"
          >
            Pokemon
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => sidebarOnClick}
            href="/Pokemon-App#/randomTeam"
          >
            Team
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => sidebarOnClick}
            href="/Pokemon-App#/types"
          >
            Pokemon Types
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => sidebarOnClick}
            href="/Pokemon-App#/abilities"
          >
            Pokemon Abilities
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => sidebarOnClick}
            href="/Pokemon-App#/moves"
          >
            All moves
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => sidebarOnClick}
            href="/Pokemon-App#/favorite"
          >
            Favorite
          </StyledA>
        </ListItem>
      </StyledSideBar>
    </>
  );
};
