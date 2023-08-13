import React, { useState, useEffect } from "react";
import {
  Banner,
  FavAbilities,
  FavMoves,
  FavoriteStyledPage,
  Title,
} from "./styled";
import { PokemonTile } from "../../Common/PokemonTile";
import { PokeAbility } from "../Abilities/AbilityPage/styled";
import { MovesTable } from "../Moves/MovesTable";
import { AbilityItem, StyledLink } from "../Abilities/AllAbilities/styled";
import { ItemNamesEdit } from "../../Common/reusableFunctions/itemNamesEdit";

interface Pokemon {
  id: number;
  name: string;
}

interface Move {
  url: string;
  name: string;
}

interface FavoriteItems {
  category: string;
  info: Pokemon | Move | string;
}

const NoFavoriteItems: React.FC = () => (
  <div>
    <p>No favorite items available.</p>
  </div>
);

export const Favorite = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
  const [favoriteMoves, setFavoriteMoves] = useState<Move[]>([]);
  const [favoriteAbilities, setFavoriteAbilities] = useState<string[]>([]);

  useEffect(() => {
    const savedFavFromLocalStorage = localStorage.getItem("savedFav");
    if (savedFavFromLocalStorage) {
      const savedFavParsed = JSON.parse(savedFavFromLocalStorage);
      const favoritePokemons = savedFavParsed
        .filter((item: FavoriteItems) => item.category === "pokemon")
        .map((item: FavoriteItems) => item.info as Pokemon);

      const favoriteMoves = savedFavParsed
        .filter((item: FavoriteItems) => item.category === "moves")
        .map((item: FavoriteItems) => item.info as Move);

      const favoriteAbilities = savedFavParsed
        .filter((item: FavoriteItems) => item.category === "ability")
        .map((item: FavoriteItems) => item.info as string);

      setFavoritePokemons(favoritePokemons);
      setFavoriteMoves(favoriteMoves);
      setFavoriteAbilities(favoriteAbilities);
    }
  }, []);

  const hasFavoriteItems = (
    favoritePokemons.length > 0 ||
    favoriteMoves.length > 0 ||
    favoriteAbilities.length > 0
  );

  return (
    <FavoriteStyledPage>
      <Banner>
        <Title>Favorite</Title>
      </Banner>
      {hasFavoriteItems ? (
        <>
          {favoritePokemons.length !== 0 ? (
            <>
              <Title>Favorite Pokemons</Title>
              <PokeAbility>
                {favoritePokemons.map((pokemon, index) => (
                  <PokemonTile
                    key={index}
                    name={pokemon.name}
                    id={pokemon.id - 1}
                  />
                ))}
              </PokeAbility>
            </>
          ) : null}
          {favoriteMoves.length !== 0 ? (
            <>
              <Title>Favorite moves</Title>
              <FavMoves>
                <MovesTable moveList={favoriteMoves} />
              </FavMoves>{" "}
            </>
          ) : null}
          {favoriteAbilities.length !== 0 ? (
            <FavAbilities>
              {favoriteAbilities.map((ability, index) => (
                <StyledLink key={`${ability}Link`} to={`/ability?id=${ability}`}>
                  <AbilityItem key={index}>
                    {ItemNamesEdit(`${ability}`)}
                  </AbilityItem>
                </StyledLink>
              ))}
            </FavAbilities>
          ) : null}
        </>
      ) : (
        <NoFavoriteItems />
      )}
    </FavoriteStyledPage>
  );
};
