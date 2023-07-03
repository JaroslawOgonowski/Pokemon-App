import React, { useState } from "react";
import { TableHead, TableRow } from "../styled";

interface MovesTableHeaderProps {
  handleSort: ((key: string) => void) | null;
}

const MovesTableHeader: React.FC<MovesTableHeaderProps> = ({ handleSort }) => {
  const [clickedHeader, setClickedHeader] = useState<string | null>(null);

  const handleHeaderClick = (key: string) => {
    if (handleSort) {
      handleSort(key);
      setClickedHeader(key);
    }
  };

  const isHeaderClicked = (key: string) => {
    return clickedHeader === key;
  };

  return (
    <thead>
      <TableRow>
        <TableHead
          sortOn={isHeaderClicked("name") ? "clicked" : ""}
          onClick={() => handleHeaderClick("name")}
        >
          {clickedHeader === "name" ? "Name 🔽" : "Name"}
        </TableHead>
        <TableHead
          onClick={() => handleHeaderClick("type")}
          sortOn={isHeaderClicked("type") ? "clicked" : ""}
        >
          Type
        </TableHead>
        <TableHead
          onClick={() => handleHeaderClick("effect")}
          sortOn={isHeaderClicked("effect") ? "clicked" : ""}
        >
          Effect
        </TableHead>
        <TableHead
          onClick={() => handleHeaderClick("damageClass")}
          sortOn={isHeaderClicked("damageClass") ? "clicked" : ""}
        >
          Damage Class
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("accuracy")}
          sortOn={isHeaderClicked("accuracy") ? "clicked" : ""}
        >
          Accuracy
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("power")}
          sortOn={isHeaderClicked("power") ? "clicked" : ""}
        >
          Power
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("pp")}
          sortOn={isHeaderClicked("pp") ? "clicked" : ""}
        >
          PP
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("crit")}
          sortOn={isHeaderClicked("crit") ? "clicked" : ""}
        >
          Crit
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("drain")}
          sortOn={isHeaderClicked("drain") ? "clicked" : ""}
        >
          Drain
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("flinch")}
          sortOn={isHeaderClicked("flinch") ? "clicked" : ""}
        >
          Flinch
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("healing")}
          sortOn={isHeaderClicked("healing") ? "clicked" : ""}
        >
          Healing
        </TableHead>
      </TableRow>
    </thead>
  );
};

export default MovesTableHeader;
