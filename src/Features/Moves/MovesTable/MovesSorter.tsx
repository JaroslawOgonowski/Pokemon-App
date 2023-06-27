import { Move, MoveData } from "./moveInterface";

interface MovesSorterProps {
  data: Move[];
  moveData: Record<string, MoveData>;
  sortKey: string;
  sortDirection: "asc" | "desc";
}

export const MovesSorter = ({
  data,
  moveData,
  sortKey,
  sortDirection,
}: MovesSorterProps) => {
  const sortedMoves = [...data].sort((a: Move, b: Move) => {
    const moveA = moveData[a.name];
    const moveB = moveData[b.name];
    if (moveA && moveB) {
      if (sortKey === "name") {
        return sortDirection === "asc"
          ? moveA.name.localeCompare(moveB.name)
          : moveB.name.localeCompare(moveA.name);
      } else if (sortKey === "type") {
        return sortDirection === "asc"
          ? moveA.type.name.localeCompare(moveB.type.name)
          : moveB.type.name.localeCompare(moveA.type.name);
      } else if (sortKey === "accuracy") {
        return sortDirection === "asc"
          ? moveA.accuracy - moveB.accuracy
          : moveB.accuracy - moveA.accuracy;
      } else if (sortKey === "power") {
        return sortDirection === "asc"
          ? Number(moveA.power) - Number(moveB.power)
          : Number(moveB.power) - Number(moveA.power);
      } else if (sortKey === "pp") {
        return sortDirection === "asc"
          ? Number(moveA.pp) - Number(moveB.pp)
          : Number(moveB.pp) - Number(moveA.pp);
      } else if (sortKey === "effect") {
        const ailmentA: string = moveA.meta.ailment.name;
        const ailmentB: string = moveB.meta.ailment.name;
        if (ailmentA === "none" || ailmentB === "none") {
          if (ailmentA === "none" && ailmentB === "none") {
            return 0;
          } else if (ailmentA === "none") {
            return sortDirection === "asc" ? 1 : -1;
          } else {
            return sortDirection === "asc" ? -1 : 1;
          }
        }
        return sortDirection === "asc"
          ? ailmentA.localeCompare(ailmentB)
          : ailmentB.localeCompare(ailmentA);
      }
    }
    return 0;
  });

  return sortedMoves;
};