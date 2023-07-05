import React, { useState } from "react";
import { Table } from "./styled";
import { CenteredTitle } from "../../../Common/CenteredTitle";
import { useScrollToTop } from "../../../Common/reusableFunctions/useScrollToTop";
import MovesTableHeader from "./MovesTableHeader";
import { MovesTableRow } from "./MovesTableRow";
import allMovesJSON from "./allMoves.json";
import { AllMovesData } from "./moveInterface";
import {sortMoves} from "./MovesSorter";

export const MovesTable = () => {
  useScrollToTop();

  const movesArray = Object.entries(allMovesJSON).map(([key, value]) => ({
    object: key,
    ...value,
  }));

  const [sortKey, setSortKey] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string, direction: "asc" | "desc") => {
    setSortKey(key);
    setSortDirection(direction);
  };

  const sortedMoves = sortMoves(movesArray, sortKey, sortDirection);
  console.log(sortKey, " sortkey table", movesArray, "movearray table", sortedMoves,"sorted table")
  return (
    <>
      <CenteredTitle content="Moves List" />

      <Table>
        <MovesTableHeader
          handleSort={(key, direction) => handleSort(key, direction)}
          sortKey={sortKey}
          sortDirection={sortDirection}
        />
        <tbody>
          {sortedMoves.map((move: AllMovesData) => (
            <MovesTableRow key={move.name} move={move} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
