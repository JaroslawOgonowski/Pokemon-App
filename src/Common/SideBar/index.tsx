import { FC } from "react";
import { ListItem, StyledA, StyledSideBar } from "./styled";

export interface SideBarTextData {
  name: string;
  link: string;
}
interface SideBarProps {
  sideBarText: SideBarTextData[];
}

export const SideBar: FC<SideBarProps> = ({ sideBarText }) => {
return(
  <StyledSideBar>
  {sideBarText.map(object=>
    <ListItem><StyledA href={object.link}>{object.name}</StyledA></ListItem>
  )}  
  </StyledSideBar>
)
};