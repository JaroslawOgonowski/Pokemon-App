import { MoveEntry } from "./Moves/movesInterface";
import { Abilities, Generation, Habitat, PokemonType } from "./PokemonCard";

export interface SoloPokemonInfo {
  data: any[];
  dataInfo: any[];
  name: string;
  flavor_text_entries: any[];
  color: any;
  types: PokemonType[];
  stats: PokemonStat[];
  evolution_chain: {
    url: string;
  };
  pokemonEvolution: PokemonEvolve | undefined;
  generation: Generation | undefined;
  habitat: Habitat | undefined;
  abilities: Abilities;
  moves: MoveEntry[] | undefined;
}

export interface PokemonCardProps {
  pokeId: string | null;
  pokemonName: string | undefined;
  description: string | null;
  color: string;
  pokemonTypes: PokemonType[];
  pokemonStats: PokemonStat[];
  pokemonEvolution: PokemonEvolve | undefined;
  generation: Generation | undefined;
  habitat: Habitat | undefined;
  abilities: Abilities;
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}
export interface PokemonStatsProps {
  pokemonStats: PokemonStat[];
}

export interface PokemonEvolve {
  item: any | undefined;
  chain: any;
}

export interface PokemonEvolutionProps {
  pokemonEvolution: PokemonEvolve | undefined;
}
