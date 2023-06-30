import React from "react";
import { TableHead, TableRow } from "../styled";

interface MovesTableHeaderProps {
  handleSort: (key: string) => void;
}

const MovesTableHeader: React.FC<MovesTableHeaderProps> = ({ handleSort }) => {
  return (
    <thead>
      <TableRow>
        <TableHead onClick={() => handleSort("name")}>Name</TableHead>
        <TableHead onClick={() => handleSort("type")}>Type</TableHead>
        <TableHead onClick={() => handleSort("effect")}>Effect</TableHead>
        <TableHead onClick={() => handleSort("damageClass")}>
          Damage Class
        </TableHead>
        <TableHead mobileHidden onClick={() => handleSort("accuracy")}>
          Accuracy
        </TableHead>
        <TableHead mobileHidden onClick={() => handleSort("power")}>
          Power
        </TableHead>
        <TableHead mobileHidden onClick={() => handleSort("pp")}>
          PP
        </TableHead>
        <TableHead mobileHidden onClick={() => handleSort("crit")}>
          Crit
        </TableHead>
        <TableHead mobileHidden onClick={() => handleSort("drain")}>
          Drain
        </TableHead>
        <TableHead mobileHidden onClick={() => handleSort("flinch")}>
          Flinch
        </TableHead>
        <TableHead mobileHidden onClick={() => handleSort("healing")}>
          Healing
        </TableHead>
      </TableRow>
    </thead>
  );
};

export default MovesTableHeader;
