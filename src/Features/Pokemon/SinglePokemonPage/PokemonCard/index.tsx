import { PokemonCardProps } from "../singlePokemonInterfaces";
import { Evolution } from "./Evolution";
import { Stats } from "./Stats";
import TypeIcon from "../../../../Common/TypeIcon";
import {
  Ability,
  CardImage,
  Description,
  Generation,
  CardBox,
  TextBox,
  Title,
  Wrapper,
  TitleImage,
  Abilities,
  Traits,
  Trait,
} from "./styled";
import { ItemNamesEdit } from "../../../../Common/reusableFunctions/itemNamesEdit";
import { BallImg } from "../../../Moves/MovePage/styled";
export interface Generation {
  name: string;
}
export interface Habitat {
  name: string;
}
export interface Abilities {
  map(arg0: (ability: { ability: { name: string } }) => any): any;
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

export const PokemonCard = ({
  pokeId,
  pokemonName,
  description,
  color,
  pokemonTypes,
  pokemonStats,
  pokemonEvolution,
  generation,
  habitat,
  abilities,
}: PokemonCardProps) => {

  
  return (
    <Wrapper>
      <CardImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}
        color={color}
      />
      <Traits>
    <Trait><div>Name</div> <div>{ItemNamesEdit(`${pokemonName}`)}</div></Trait>
    <Trait><div>Number</div> <div>#{pokeId}</div></Trait>
    <Trait><div>Color</div> <div>{ItemNamesEdit(`${color}`)}</div></Trait>
    <Trait><div>Generation</div> <div>{generation?.name.toUpperCase()}</div></Trait>
    <Trait><div>Habitat</div> <div>{habitat !== null ? habitat?.name.toUpperCase() : "Unknown"}</div></Trait>
    <Trait><div>Generation</div> <div>{generation?.name.toUpperCase()}</div></Trait>
    <Description>{description}</Description>
    </Traits>
    </Wrapper>


    /*
    <Wrapper>
      <CardImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}
      />
      <CardBox color={color}>
        <TitleImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}
        />
        <TextBox>
          <Title>
            #{pokeId} {pokemonName}
            <TypeIcon
              flex={false}
              img={false}
              pokemonTypes={pokemonTypes}
              table={false}
            />
          </Title>
          <Description>
            Abilities:
            <Abilities>
              {abilities.map((object) => (
                <Ability
                  key={`abilities${object.ability.name}`}
                  color={color}
                  to={`/ability?id=${object.ability.name}`}
                >
                  {object.ability.name.toUpperCase()}
                </Ability>
              ))}
            </Abilities>
          </Description>
          <Evolution pokemonEvolution={pokemonEvolution} />
        </TextBox>
        <Stats pokemonStats={pokemonStats} />
      </CardBox>
    </Wrapper>
*/
);
};
