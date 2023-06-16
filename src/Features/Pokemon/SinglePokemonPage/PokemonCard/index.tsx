import { CardImage, Description, RightBox, Stats, TextBox, Title, Type, Types, Wrapper } from "./styled";
import typesData from "./types.json";

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}


interface PokemonCardProps {
  pokeId: string | null;
  pokemonName: string | undefined;
  description: string | null;
  color: string;
  pokemonTypes: PokemonType[];
  pokemonStats: PokemonStat[];
}

export const PokemonCard = ({ pokeId, pokemonName, description, color, pokemonTypes, pokemonStats }: PokemonCardProps) => {

  function getBackgroundColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.backgroundColor
  };

  function getFontColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.fontColor || "black"
  };
  console.log(pokemonStats)
  return (
    <Wrapper>
      <CardImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`} />
      <RightBox color={color}>
        <TextBox>
          <Title>#{pokeId} {pokemonName}
            <Types>
              {pokemonTypes.map((object) => (
                <Type
                  typeBackgroundColor={getBackgroundColorByType(object.type.name)}
                  typeFontColor={getFontColorByType(object.type.name)}
                  key={object.slot}>{object.type.name}
                </Type>
              ))}
            </Types></Title>
          <Description>{description}</Description>
          <Stats>
            {pokemonStats.map((statistic) => (
              <div key={statistic.stat.name}>{statistic.stat.name}- {statistic.base_stat}</div>
            ))}
          </Stats>
        </TextBox>
      </RightBox>

    </Wrapper>
  );
};
