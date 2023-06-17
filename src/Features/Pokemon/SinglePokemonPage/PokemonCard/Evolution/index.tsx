import { StyledLink } from "../../../../../Common/Link/styled";

export interface PokemonEvolve {
  item: any | undefined;
  chain: any;
}

interface PokemonEvolutionProps {
  pokemonEvolution: PokemonEvolve | undefined;
}

export const Evolution = ({ pokemonEvolution }: PokemonEvolutionProps) => {
  const getValue = (url: string, returnNumber: boolean) => {
    const parts = url.split("/");
    const numberPart = parts[parts.length - 2];
    const lastValue = numberPart !== "" ? parseInt(numberPart) : 0;
    return returnNumber
      ? lastValue
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${lastValue}.png`;
  };

  const renderPokemon = (pokemon: { species: { name: any; url: string } }) => (
    <div key={pokemon.species.name}>
      <StyledLink to={`/pokemonDetails?pokeId=${getValue(pokemon.species.url, true)}`}>
        <img src={pokemon.species.url ? getValue(pokemon.species.url, false).toString() : ""} alt={pokemon.species.name} />
        {pokemon.species.name}
      </StyledLink>
    </div>
  );

  return (
    <div>
      Evolutionary cycle:
      {pokemonEvolution?.chain.species.name && (
        <StyledLink to={`/pokemonDetails?pokeId=${getValue(pokemonEvolution.chain.species.url, true)}`}>
          <img
            src={pokemonEvolution.chain.species.url ? getValue(pokemonEvolution.chain.species.url, false).toString() : ""}
            alt={pokemonEvolution.chain.species.name}
          />
          {pokemonEvolution.chain.species.name}
        </StyledLink>
      )}

      {pokemonEvolution?.chain.evolves_to[0] && "➡"}
      <div>
        {pokemonEvolution?.chain.evolves_to?.map(renderPokemon)}
      </div>

      {pokemonEvolution?.chain.evolves_to[0]?.evolves_to[0] && "➡"}
      <div>
        {pokemonEvolution?.chain.evolves_to[0]?.evolves_to?.map(renderPokemon)}
      </div>
    </div>
  );
};
