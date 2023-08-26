import { useSidebar } from "../../Core/SideBarContext";
import { ListItem, SidebarTitle, StyledA, StyledSideBar } from "./styled";

export const SideBar = () => {
  const { sideBarOn, setSideBarOn } = useSidebar();

  const sidebarOnClick = () => {
    if (window.innerWidth <= 767) {
      setSideBarOn(!sideBarOn);
    } else return;
  };

  const sidebarItems = [
    { label: "Pokemon", href: "/Pokemon-App#/pokemon" },
    { label: "Team", href: "/Pokemon-App#/randomTeam" },
    { label: "Pokemon Types", href: "/Pokemon-App#/types" },
    { label: "Pokemon Abilities", href: "/Pokemon-App#/abilities" },
    { label: "All moves", href: "/Pokemon-App#/moves" },
    { label: "Favorite", href: "/Pokemon-App#/favorite" },
  ];

  return (
    <>
      <SidebarTitle sideBarOn={!sideBarOn} onClick={() => setSideBarOn(!sideBarOn)}>
        {sideBarOn ? "≡" : "×"}
      </SidebarTitle>
      <StyledSideBar sideBarOn={sideBarOn}>
        {sidebarItems.map((item, index) => (
          <ListItem key={index}>
            <StyledA onClick={() => sidebarOnClick()} href={item.href}>
              {item.label}
            </StyledA>
          </ListItem>
        ))}
      </StyledSideBar>
    </>
  );
};
