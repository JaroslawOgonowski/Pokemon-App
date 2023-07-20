import { FC, useEffect, useState } from "react";
import {
  LinkText,
  ListItem,
  SidebarTitle,
  StyledA,
  StyledSideBar,
} from "./styled";
export interface SideBarTextData {
  name: string;
  link: string;
}
interface SideBarProps {
  sideBarText: SideBarTextData[];
}

export const SideBar: FC<SideBarProps> = ({ sideBarText }) => {
  const [sideBarOn, setSideBarOn] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleWindowResize = () => {
      setSideBarOn(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <SidebarTitle onClick={() => setSideBarOn(!sideBarOn)}>
        {sideBarOn ? "MENU ≡" : "MENU ×"}
      </SidebarTitle>{" "}
      <StyledSideBar sideBarOn={sideBarOn}>
        {sideBarText.map((object) => (
          <ListItem key={object.name}>
            <StyledA href={object.link}>
              <LinkText>{object.name}</LinkText>
            </StyledA>
          </ListItem>
        ))}
      </StyledSideBar>
    </>
  );
};
