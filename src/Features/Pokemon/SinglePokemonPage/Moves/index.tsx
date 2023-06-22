import { useState } from "react";

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

export interface Move {
  name: string;
  url: string;
}

export interface MoveEntry {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface MovesProps {
  moves: MoveEntry[] | undefined;
}
export const Moves = ({ moves }: MovesProps) => {
  const games = moves?.reduce(
    (groups: string[], move) => {
      move.version_group_details.forEach((detail) => {
        if (!groups.includes(detail.version_group.name)) {
          groups.push(detail.version_group.name);
        }
      });
      return groups;
    },
    []
  );
  
  const [gameIndex, setGameIndex] = useState(1);

  const handlePrevGen = () => {
    if (gameIndex === 0) {
      setGameIndex(games?.length ? games.length - 1 : 0);
    } else {
      setGameIndex(gameIndex - 1);
    }
  };

  const handleNextGen = () => {
    if (gameIndex === (games?.length ? games.length - 1 : 0)) {
      setGameIndex(0);
    } else {
      setGameIndex(gameIndex + 1);
    }
  };

  const generation = games?.[gameIndex];

  const title = generation ? generation.charAt(0).toUpperCase() + generation.slice(1).replace(/-/g, ", ") : "";

  const filteredMoves = moves?.filter((move) =>
    move.version_group_details.some(
      (detail) => detail.version_group.name === generation
    )
  );

  return (
    <>
      <h2>Moves</h2>
      <button onClick={handlePrevGen}>Previous game ⬅</button>
      <h3>{title}</h3>
      <button onClick={handleNextGen}>Next game ➡</button>
      <div>
        {filteredMoves?.map((move) => {
          const capitalizedMoveName =
            move.move.name.charAt(0).toUpperCase() +
            move.move.name.slice(1);
          return (
            <div key={move.move.name}>
              {capitalizedMoveName}
              <div>Level Learned At: {move.version_group_details[0].level_learned_at}</div>
              <div>Move Learn Method: {move.version_group_details[0].move_learn_method.name}</div>
              <div>Move URL: {move.move.url}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
