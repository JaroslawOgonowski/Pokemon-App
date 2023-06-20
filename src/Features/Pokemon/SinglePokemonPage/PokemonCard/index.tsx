import { PokemonCardProps } from "../singlePokemonInterfaces";
import { Evolution } from "./Evolution";
import {  Stats } from "./Stats";
import { Ability, CardImage, Description, Generation, CardBox, TextBox, Title, Type, Types, Wrapper, TitleImage, Abilities } from "./styled";
import typesData from "./types.json";
export interface Generation {
  name: string;
}
export interface Habitat {
  name: string;
}
export interface Abilities {
  map(arg0: (ability: { ability: { name: string; }; }) => any): any;
  length: number;
  [index: number]: {
    ability: {
      name: string;
      url: string;
    };
  };
}
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export const PokemonCard = ({ pokeId, pokemonName, description, color, pokemonTypes, pokemonStats, pokemonEvolution, generation, habitat, abilities }: PokemonCardProps) => {

  function getBackgroundColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.backgroundColor;
  }

  function getFontColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.fontColor || "black";
  }

  return (
    <Wrapper>
      <CardImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`} />
      <CardBox color={color}>
        <TitleImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`} />
        <TextBox>
          <Title>
            #{pokeId} {pokemonName}
            <Types>
              {pokemonTypes.map((object) => (
                <Type
                  typeBackgroundColor={getBackgroundColorByType(object.type.name)}
                  typeFontColor={getFontColorByType(object.type.name)}
                  key={object.slot}
                >
                  {object.type.name}
                </Type>
              ))}
            </Types>
          </Title>
          <Generation>{generation?.name.toUpperCase()}</Generation>
          <Description>{description}</Description>
          <Description>Habitat: {habitat !== null ? habitat?.name.toUpperCase() : "Unknown"}</Description>
          <Description>
            Abilities:
            <Abilities>
              {abilities.map((object) =>
                <Ability key={`abilities${object.ability.name}`} color={color}>
                  {object.ability.name.toUpperCase()}
                </Ability>
              )}
            </Abilities>
          </Description>
          <Evolution pokemonEvolution={pokemonEvolution} />
        </TextBox>
        <Stats pokemonStats={pokemonStats} />
      </CardBox>
    </Wrapper>
  );
};
