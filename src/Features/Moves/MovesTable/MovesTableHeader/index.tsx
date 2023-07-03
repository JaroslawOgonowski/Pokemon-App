import React, { useState } from "react";
import { TableHead, TableRow } from "../styled";

interface MovesTableHeaderProps {
  handleSort: ((key: string, direction: "asc" | "desc") => void) | null;
}

const MovesTableHeader: React.FC<MovesTableHeaderProps> = ({ handleSort }) => {
  const [clickedHeader, setClickedHeader] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleHeaderClick = (key: string) => {
    if (handleSort) {
      const direction = clickedHeader === key && sortDirection === "asc" ? "desc" : "asc";
      handleSort(key, direction);
      setClickedHeader(key);
      setSortDirection(direction);
    }
  };

  const isHeaderClicked = (key: string) => {
    return clickedHeader === key;
  };

  const getSortArrow = (key: string) => {
    if (isHeaderClicked(key)) {
      return sortDirection === "asc" ? "🔽" : "🔼";
    }
    return null;
  };

  return (
    <thead>
      <TableRow>
        <TableHead
          sortOn={isHeaderClicked("name") ? "clicked" : ""}
          onClick={() => handleHeaderClick("name")}
        >
          Name {getSortArrow("name")}
        </TableHead>
        <TableHead
          onClick={() => handleHeaderClick("type")}
          sortOn={isHeaderClicked("type") ? "clicked" : ""}
        >
          Type {getSortArrow("type")}
        </TableHead>
        <TableHead
          onClick={() => handleHeaderClick("effect")}
          sortOn={isHeaderClicked("effect") ? "clicked" : ""}
        >
          Effect {getSortArrow("effect")}
        </TableHead>
        <TableHead
          onClick={() => handleHeaderClick("damageClass")}
          sortOn={isHeaderClicked("damageClass") ? "clicked" : ""}
        >
          Damage Class {getSortArrow("damageClass")}
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("accuracy")}
          sortOn={isHeaderClicked("accuracy") ? "clicked" : ""}
        >
          Accuracy {getSortArrow("accuracy")}
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("power")}
          sortOn={isHeaderClicked("power") ? "clicked" : ""}
        >
          Power {getSortArrow("power")}
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("pp")}
          sortOn={isHeaderClicked("pp") ? "clicked" : ""}
        >
          PP {getSortArrow("pp")}
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("crit")}
          sortOn={isHeaderClicked("crit") ? "clicked" : ""}
        >
          Crit {getSortArrow("crit")}
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("drain")}
          sortOn={isHeaderClicked("drain") ? "clicked" : ""}
        >
          Drain {getSortArrow("drain")}
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("flinch")}
          sortOn={isHeaderClicked("flinch") ? "clicked" : ""}
        >
          Flinch {getSortArrow("flinch")}
        </TableHead>
        <TableHead
          mobileHidden
          onClick={() => handleHeaderClick("healing")}
          sortOn={isHeaderClicked("healing") ? "clicked" : ""}
        >
          Healing {getSortArrow("healing")}
        </TableHead>
      </TableRow>
    </thead>
  );
};

export default MovesTableHeader;
