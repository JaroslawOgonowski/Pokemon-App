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
interface FavoriteItems {
  favAdditionalInfo: any;
  category: string;
  info: string;
  additionalInfo: string | null;
}

const NoFavoriteItems: React.FC = () => (
  <div>
    <p>No favorite items available.</p>
  </div>
);

export const Favorite: React.FC = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<FavoriteItems[]>([]);
  const [favoriteMoves, setFavoriteMoves] = useState<FavoriteItems[]>([]);
  const [favoriteAbilities, setFavoriteAbilities] = useState<FavoriteItems[]>(
    []
  );

  useEffect(() => {
    const savedFavFromLocalStorage = localStorage.getItem("savedFav");
    if (savedFavFromLocalStorage) {
      const savedFavParsed = JSON.parse(savedFavFromLocalStorage);
      const favoritePokemons = savedFavParsed.filter(
        (item: FavoriteItems) => item.category === "pokemon"
      );

      const favoriteMoves = savedFavParsed.filter(
        (item: FavoriteItems) => item.category === "move"
      );

      const favoriteAbilities = savedFavParsed.filter(
        (item: FavoriteItems) => item.category === "ability"
      );

      setFavoritePokemons(favoritePokemons);
      setFavoriteMoves(favoriteMoves);
      setFavoriteAbilities(favoriteAbilities);
    }
  }, []);

  const hasFavoriteItems =
    favoritePokemons.length > 0 ||
    favoriteMoves.length > 0 ||
    favoriteAbilities.length > 0;

  return (
    <FavoriteStyledPage>
      <Banner>
        <Title>Favorite</Title>
      </Banner>
      {hasFavoriteItems ? (
        <>
          {favoritePokemons.length !== 0 && (
            <>
              <Title>Favorite Pokemons</Title>
              <PokeAbility>
                {favoritePokemons.map((pokemon, index) => (
                  <PokemonTile
                    key={index}
                    name={pokemon.info}
                    id={Number(pokemon.favAdditionalInfo) -1}
                  />
                ))}
              </PokeAbility>
            </>
          )}
          {favoriteMoves.length !== 0 && (
            <>
              <Title>Favorite moves</Title>
              <FavMoves>
                <MovesTable
                  moveList={favoriteMoves.map((item) => ({
                    name: item.info,
                    url: item.additionalInfo ? item.additionalInfo : "",
                  }))}
                />
              </FavMoves>{" "}
            </>
          )}
          {favoriteAbilities.length !== 0 && (
            <FavAbilities>
              {favoriteAbilities.map((ability, index) => (
                <StyledLink
                  key={`${ability.info}Link`}
                  to={`/ability?id=${ability.info}`}
                >
                  <AbilityItem key={index}>
                    {ItemNamesEdit(ability.info)}
                  </AbilityItem>
                </StyledLink>
              ))}
            </FavAbilities>
          )}
        </>
      ) : (
        <NoFavoriteItems />
      )}
    </FavoriteStyledPage>
  );
};
