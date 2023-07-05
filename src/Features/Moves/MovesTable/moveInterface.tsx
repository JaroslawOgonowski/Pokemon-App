export interface AllMovesData {
  pp: any;
  power: any;
  accuracy: any;
  damage_class: any;
  meta: any;
  type: any;
  name: string;
  move?: {
    name: string;
    accuracy: number;
    type: { name: string };
    damage_class: { name: string };
    power: number | null;
    pp: number;
    meta: {
      crit_rate: number;
      drain: number;
      flinch_chance: number;
      healing: number;
      ailment: { name: string };
    };
  };
}
