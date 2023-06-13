import { FC } from "react";
import { StyledSideBar } from "./styled";

interface SideBarTextData {
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
    <li><a href={object.link}>{object.name}</a></li>
  )}  
  </StyledSideBar>
)
};