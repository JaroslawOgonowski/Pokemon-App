import { ReactElement } from "react";
import { IconBox, MoveStatBox } from "./styled";

interface MoveStatProps {
  type: string;
  value: string | undefined | null;
  icon: ReactElement<any, string | React.JSXElementConstructor<any>>; // Typ optymalny dla ikon SVG
}

export const MoveStat = ({ type, value, icon }: MoveStatProps) => (
  <MoveStatBox>
    <IconBox>
      {icon}
      {type}
    </IconBox>
    {value ? value : "-"}
  </MoveStatBox>
);
