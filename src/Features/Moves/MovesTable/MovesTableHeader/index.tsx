import React, { useState } from "react";
import { TableHead, TableRow } from "../styled";

interface MovesTableHeaderProps {
  handleSort: ((key: string, direction: "asc" | "desc") => void) | null;
  sortKey: string;
  sortDirection: "asc" | "desc";
}

const MovesTableHeader: React.FC<MovesTableHeaderProps> = ({
  handleSort,
  sortKey,
  sortDirection,
}) => {
  const [clickedHeader, setClickedHeader] = useState<string | null>("");
  const [currentSortDirection, setCurrentSortDirection] = useState<
    "asc" | "desc"
  >(sortDirection);

  const handleHeaderClick = (key: string) => {
    if (handleSort) {
      const direction =
        clickedHeader === key && currentSortDirection === "asc"
          ? "desc"
          : "asc";
      handleSort(key, direction);
      setClickedHeader(key);
      setCurrentSortDirection(direction);
    }
  };
  const isHeaderClicked = (key: string) => {
    return clickedHeader === key;
  };
  const getSortArrow = (key: string) => {
    if (isHeaderClicked(key)) {
      return currentSortDirection === "asc" ? "🔽" : "🔼";
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
