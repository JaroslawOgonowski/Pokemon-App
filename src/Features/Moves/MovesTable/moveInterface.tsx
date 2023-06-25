
export interface Move {
  name: string;
  url: string;
}

export interface MoveData {
  damage_class: { name: string };
  power: string;
  pp: string;
  name: string;
  url: string;
  accuracy: number;
  type: { name: string };
  meta: {
    crit_rate: number,
    drain: number,
    flinch_chance: number,
    healing: number,
    ailment: { name: string }
  };
}