import React, { useState } from "react";
import { Table, TableContainer } from "./styled";
import { useScrollToTop } from "../../../Common/reusableFunctions/useScrollToTop";
import MovesTableHeader from "./MovesTableHeader";
import { MovesTableRow } from "./MovesTableRow";
import allMovesJSON from "./allMoves.json";
import { AllMovesData } from "./moveInterface";
import { sortMoves } from "./MovesSorter";

interface Move {
  name: string;
  url: string;
  favorite?: boolean;
}

interface Props {
  moveList?: Move[];
  favorite?: boolean;
}

export const MovesTable: React.FC<Props> = ({ moveList, favorite }) => {
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

  let sortedMoves: AllMovesData[];

  if (moveList) {
    const moveNames = moveList.map((move) => move.name);
    const filteredMoves = movesArray.filter((move) =>
      moveNames.includes(move.object)
    );
    sortedMoves = sortMoves(filteredMoves, sortKey, sortDirection);
  } else {
    sortedMoves = sortMoves(movesArray, sortKey, sortDirection);
  }

  const handleRemoveMove = (move: AllMovesData) => {
    if (moveList) {
      const updatedMoveList = moveList.filter((m) => m.name !== move.name);
    }
  };

  return (
    <>
      <TableContainer>
        <Table>
          <MovesTableHeader
            handleSort={(key, direction) => handleSort(key, direction)}
            sortKey={sortKey}
            sortDirection={sortDirection}
            favorite={favorite}
          />
          <tbody>
            {sortedMoves.map((move: AllMovesData) => (
              <MovesTableRow
                key={move.name}
                move={move}
                favorite={favorite || false}
                onRemove={handleRemoveMove}
              />
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};
