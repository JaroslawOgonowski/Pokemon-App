import { Evolution, PokemonEvolve } from "./Evolution";
import { PokemonStat, Stats } from "./Stats";
import { CardImage, Description, RightBox, TextBox, Title, Type, Types, Wrapper } from "./styled";
import typesData from "./types.json";

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonCardProps {
  pokeId: string | null;
  pokemonName: string | undefined;
  description: string | null;
  color: string;
  pokemonTypes: PokemonType[];
  pokemonStats: PokemonStat[];
  pokemonEvolution: PokemonEvolve | undefined;
}

export const PokemonCard = ({ pokeId, pokemonName, description, color, pokemonTypes, pokemonStats, pokemonEvolution }: PokemonCardProps) => {

  function getBackgroundColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.backgroundColor
  };

  function getFontColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.fontColor || "black"
  };

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
          <Evolution pokemonEvolution={pokemonEvolution} />
        </TextBox>
        <Stats pokemonStats={pokemonStats} />
      </RightBox>

    </Wrapper>
  );
};
