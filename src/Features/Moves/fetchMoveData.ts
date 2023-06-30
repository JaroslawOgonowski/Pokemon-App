import { fetchMove } from "../../Core/API";
import { MoveData } from "./MovesTable/moveInterface";

export const fetchAllMoveData = async (
  moves: Array<any>,
  setMoveData: React.Dispatch<React.SetStateAction<Record<string, MoveData>>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  const newData: Record<string, MoveData> = {};
  for (const move of moves) {
    try {
      const moveInfo = await fetchMove(move.url);
      const moveData: MoveData = {
        name: moveInfo.name,
        url: moveInfo.url,
        accuracy: moveInfo.accuracy,
        type: {
          name: moveInfo.type.name,
        },
        damage_class: { name: moveInfo.damage_class.name },
        power: moveInfo.power,
        pp: moveInfo.pp,
        meta: {
          crit_rate: moveInfo.meta.crit_rate,
          drain: moveInfo.meta.drain,
          flinch_chance: moveInfo.meta.flinch_chance,
          healing: moveInfo.meta.healing,
          ailment: { name: moveInfo.meta.ailment.name },
        },
      };
      newData[move.name] = moveData;
    } catch (error) {}
  }
  setMoveData(newData);
  setLoading(false);
};
