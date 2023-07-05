import { AllMovesData } from "./moveInterface";

export const sortMoves = (
  data: AllMovesData[],
  sortKey: string,
  sortDirection: "asc" | "desc"
): AllMovesData[] => {
  const sortedMoves = data.sort((a, b) => {
    const moveA = a;
    const moveB = b;
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
      } else if (sortKey === "damageClass") {
        const damageClassA: string = moveA.damage_class.name;
        const damageClassB: string = moveB.damage_class.name;
        return sortDirection === "asc"
          ? damageClassA.localeCompare(damageClassB)
          : damageClassB.localeCompare(damageClassA);
      } else if (sortKey === "crit") {
        return sortDirection === "asc"
          ? moveA.meta.crit_rate - moveB.meta.crit_rate
          : moveB.meta.crit_rate - moveA.meta.crit_rate;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  });
  return sortedMoves;
};
