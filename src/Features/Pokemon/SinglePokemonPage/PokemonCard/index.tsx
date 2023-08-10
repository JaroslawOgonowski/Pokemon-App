import { PokemonCardProps } from "../singlePokemonInterfaces";
import { Evolution } from "./Evolution";
import { Stats } from "./Stats";
import TypeIcon from "../../../../Common/TypeIcon";
import {
  Ability,
  CardImage,
  Description,
  Generation,
  Wrapper,
  Abilities,
  Traits,
  Trait,
  ContentBox,
} from "./styled";
import { ItemNamesEdit } from "../../../../Common/reusableFunctions/itemNamesEdit";
import { useEffect, useState } from "react";
import { BallImg } from "../../../Moves/MovePage/styled";
import { AddToFav } from "../../../../Common/AddToFav";

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
  const imageSources = [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeId}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSource = imageSources[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % imageSources.length
      );
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Wrapper>
      <AddToFav
      top={16}
      left={10}
      />
      <BallImg />
      <CardImage color={color}>        
        <img alt={pokemonName} src={currentSource} />
      </CardImage>
      <Traits>
        <Trait>
          <div>Name</div> <div>{ItemNamesEdit(`${pokemonName}`)}</div>
        </Trait>
        <Trait>
          <div>Number</div> <div>#{pokeId}</div>
        </Trait>
        <Trait>
          <div>Types</div>{" "}
          <TypeIcon
            flex={false}
            img={false}
            pokemonTypes={pokemonTypes}
            table={false}
          />
        </Trait>
        <Trait>
          <div>Color</div> <div>{ItemNamesEdit(`${color}`)}</div>
        </Trait>
        <Trait>
          <div>{generation?.name.toUpperCase()}</div>
        </Trait>
        <Trait>
          <div>Habitat</div>{" "}
          <div>
            {habitat !== null ? habitat?.name.toUpperCase() : "Unknown"}
          </div>
        </Trait>
        <Description>
          Abilities:{" "}
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
        <Description>{description}</Description>
      </Traits>
      <ContentBox>
        <Stats pokemonStats={pokemonStats} />
        <Evolution pokemonEvolution={pokemonEvolution} />
      </ContentBox>
    </Wrapper>
  );
};
