import { ReactNode } from "react"; 
import { useSidebar } from "../../Core/SideBarContext";
import { StyledRoutes } from "../../Core/styled";

interface MainContentProps {
  children: ReactNode;
}

export const MainContent = ({ children }: MainContentProps) => {
  const { sideBarOn } = useSidebar();
  return <StyledRoutes sideBarOn={sideBarOn}>{children}</StyledRoutes>;
};
