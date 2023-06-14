import { Details, PokemonId, PokemonImage, PokemonName, Wrapper } from "./styled"

interface PokemonTileProps {
  id: number;
  name: string;
}

export const PokemonTile = (props: PokemonTileProps) => {
const pokemonName = props.name.slice(0, 1).toUpperCase()+props.name.slice(1)
const realID = props.id + 1

return (
    <Wrapper>
      <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${realID}.png`} />
      <Details>
        <PokemonId>#{realID}</PokemonId>
        <PokemonName>{pokemonName}</PokemonName>
      </Details>
    </Wrapper>
  )
}