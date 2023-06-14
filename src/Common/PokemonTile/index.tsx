import { Details, PokemonId, PokemonImage, PokemonName, Wrapper } from "./styled"

interface PokemonTileProps {
  id: number;
  name: string;
}

export const PokemonTile = (props: PokemonTileProps) => {
  return (
    <Wrapper>
      <PokemonImage src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id + 1}.svg`} />
      <Details>
        <PokemonId>#{props.id + 1}</PokemonId>
        <PokemonName>{props.name}</PokemonName>
      </Details>
    </Wrapper>
  )
}