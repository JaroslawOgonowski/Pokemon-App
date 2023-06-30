import { ReactElement } from "react";
import { IconBox, Label, MoveInfoDiv, MoveStatBox } from "./styled";

interface MoveStatProps {
  type: string;
  value: string | undefined | null;
  icon: ReactElement<any, string | React.JSXElementConstructor<any>>;
}

interface MoveInfoProps {
  label: string;
  value: string | undefined | null;
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

export const MoveInfo = ({ label, value }: MoveInfoProps) => {
  if (!value) return null;
  else
    return (
      <MoveInfoDiv>
        <Label>{label}</Label>
        {value}
      </MoveInfoDiv>
    );
};
