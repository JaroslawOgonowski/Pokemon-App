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
