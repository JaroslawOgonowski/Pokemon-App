import { PokemonEvolutionProps } from "../../singlePokemonInterfaces";
import {
  EvolutionBox,
  EvolutionTitle,
  MultiEvolutionLayout,
  Next,
  PokemonEvolutionName,
  StyledEvolutinImage,
  StyledEvolution,
  StyledLink,
} from "./styled";

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
      <StyledLink
        to={`/pokemonDetails?pokeId=${getValue(pokemon.species.url, true)}`}
      >
        <StyledEvolutinImage
          src={
            pokemon.species.url
              ? getValue(pokemon.species.url, false).toString()
              : ""
          }
          alt={pokemon.species.name}
        />
        <PokemonEvolutionName>
          {pokemon.species.name.toUpperCase()}
        </PokemonEvolutionName>
      </StyledLink>
    </div>
  );

  return (
    <StyledEvolution>
      <EvolutionTitle>Evolutionary cycle:</EvolutionTitle>
      <EvolutionBox>
        {pokemonEvolution?.chain.species.name && (
          <MultiEvolutionLayout>
            <StyledLink
              to={`/pokemonDetails?pokeId=${getValue(
                pokemonEvolution.chain.species.url,
                true
              )}`}
            >
              <StyledEvolutinImage
                src={
                  pokemonEvolution.chain.species.url
                    ? getValue(
                        pokemonEvolution.chain.species.url,
                        false
                      ).toString()
                    : ""
                }
                alt={pokemonEvolution.chain.species.name.toUpperCase()}
              />
              <PokemonEvolutionName>
                {pokemonEvolution.chain.species.name.toUpperCase()}
              </PokemonEvolutionName>
            </StyledLink>
          </MultiEvolutionLayout>
        )}
        <Next>{pokemonEvolution?.chain.evolves_to[0] && "➡"}</Next>
        <MultiEvolutionLayout>
          {pokemonEvolution?.chain.evolves_to?.map(renderPokemon)}
        </MultiEvolutionLayout>
        <Next>
          {pokemonEvolution?.chain.evolves_to[0]?.evolves_to[0] && "➡"}
        </Next>
        <MultiEvolutionLayout>
          {pokemonEvolution?.chain.evolves_to[0]?.evolves_to?.map(
            renderPokemon
          )}
        </MultiEvolutionLayout>
      </EvolutionBox>
    </StyledEvolution>
  );
};
