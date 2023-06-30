import { FC } from "react";
import { LinkText, ListItem, StyledA, StyledSideBar } from "./styled";

export interface SideBarTextData {
  name: string;
  link: string;
}
interface SideBarProps {
  sideBarText: SideBarTextData[];
}

export const SideBar: FC<SideBarProps> = ({ sideBarText }) => {
  return (
    <StyledSideBar>
      {sideBarText.map((object) => (
        <ListItem key={object.name}>
          <StyledA href={object.link}>
            <LinkText>{object.name}</LinkText>
          </StyledA>
        </ListItem>
      ))}
    </StyledSideBar>
  );
};
