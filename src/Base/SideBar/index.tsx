import { useState } from "react";
import { ListItem, SidebarTitle, StyledA, StyledSideBar } from "./styled";

export const SideBar = () => {
  const [sideBarOn, setSideBarOn] = useState(true);

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
            onClick={() => setSideBarOn(!sideBarOn)}
            href="/Pokemon-App#/pokemon"
          >
            Pokemon
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => setSideBarOn(!sideBarOn)}
            href="/Pokemon-App#/randomTeam"
          >
            Team
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => setSideBarOn(!sideBarOn)}
            href="/Pokemon-App#/types"
          >
            Pokemon Types
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => setSideBarOn(!sideBarOn)}
            href="/Pokemon-App#/abilities"
          >
            Pokemon Abilities
          </StyledA>
        </ListItem>
        <ListItem>
          <StyledA
            onClick={() => setSideBarOn(!sideBarOn)}
            href="/Pokemon-App#/moves"
          >
            All moves
          </StyledA>
        </ListItem>
      </StyledSideBar>
    </>
  );
};
