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
  console.log(moves);
  const filteredMoves = moves?.filter((move) =>
    move.version_group_details.some(
      (detail) => detail.version_group.name === "red-blue"
    )
  );

  return (
    <>
      <h2>Moves</h2>
      ⬅<div>Generation I</div>➡
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
