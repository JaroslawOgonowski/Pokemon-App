import { Details, PokemonId, PokemonImage, PokemonName, Wrapper } from "./styled"

export const PokemonTile = () => {
  return (
    <Wrapper>
      <PokemonImage src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/9.svg"/>
      <Details>
        <PokemonId>#9</PokemonId>
        <PokemonName>blaztoizzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</PokemonName>
      </Details>
    </Wrapper>
  )
}