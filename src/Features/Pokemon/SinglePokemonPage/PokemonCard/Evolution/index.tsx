import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export interface PokemonEvolve {
  item: any | undefined;
  chain: any;
}

interface PokemonEvolutionProps {
  pokemonEvolution: PokemonEvolve | undefined;
}

export const Evolution = ({ pokemonEvolution }: PokemonEvolutionProps) => {

  console.log(pokemonEvolution)
  return (
    <div>
      Evolve:
      {pokemonEvolution?.chain.species.name} 
      {pokemonEvolution?.chain?.evolves_to[0] ? "➡" : null}
      <div>
        {pokemonEvolution?.chain?.evolves_to?.map((item: { species: { name: any; }; }) =>
          <div>{item.species.name}</div>)}
      </div> {pokemonEvolution?.chain?.evolves_to[0]?.evolves_to[0]? "➡" : null}
      <div>
        {pokemonEvolution?.chain?.evolves_to[0]?.evolves_to?.map((item: { species: { name: any; }; }) =>
          <div>{item.species.name}</div>)}
      </div>
    </div>
  );
};
