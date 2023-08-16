import React, { useState, useEffect } from "react";
import {
  Banner,
  FavAbilities,
  FavMoves,
  FavoriteStyledPage,
  RemoveAbilityButton,
  RemovePokemonButton,
  Subtitle,
  Title,
} from "./styled";
import { PokemonTile } from "../../Common/PokemonTile";
import { PokeAbility } from "../Abilities/AbilityPage/styled";
import { MovesTable } from "../Moves/MovesTable";
import {
  AbilityItem,
  AbilityList,
  StyledLink,
} from "../Abilities/AllAbilities/styled";
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

  const handleRemoveFavorite = (category: string, index: number) => {
    const updatedFavorites = [...favoritePokemons];
    updatedFavorites.splice(index, 1);
    setFavoritePokemons(updatedFavorites);

    const savedFavFromLocalStorage = localStorage.getItem("savedFav");
    if (savedFavFromLocalStorage) {
      const updatedLocalStorage = JSON.parse(savedFavFromLocalStorage)
        .map((item: FavoriteItems) => {
          if (
            item.category === category &&
            item.info === favoritePokemons[index].info
          ) {
            return null;
          }
          return item;
        })
        .filter(Boolean);
      localStorage.setItem("savedFav", JSON.stringify(updatedLocalStorage));
    }
  };

  return (
    <FavoriteStyledPage>
      <Banner>
        <Title>Favorite</Title>
      </Banner>
      {hasFavoriteItems ? (
        <>
          {favoritePokemons.length !== 0 && (
            <>
              <Subtitle>Favorite Pokemons</Subtitle>
              <PokeAbility>
                {favoritePokemons.map((pokemon, index) => (
                  <>
                    <PokemonTile
                      key={`pkmnFav${index}`}
                      name={pokemon.info}
                      id={Number(pokemon.favAdditionalInfo) - 1}
                    />
                    <RemovePokemonButton
                      onClick={() => handleRemoveFavorite("pokemon", index)}
                    >
                      Remove
                    </RemovePokemonButton>
                  </>
                ))}
              </PokeAbility>
            </>
          )}
          {favoriteMoves.length !== 0 && (
            <>
              <FavMoves>
                <Subtitle>Favorite moves table </Subtitle>
                <MovesTable
                favorite= {true}
                  moveList={favoriteMoves.map((item) => ({
                    name: item.info,
                    url: item.additionalInfo ? item.additionalInfo : "",
                  }))}
                ></MovesTable>
              </FavMoves>
            </>
          )}
          {favoriteAbilities.length !== 0 && (
            <FavAbilities>
              <Subtitle>Favorite Abilities</Subtitle>
              <AbilityList>
                {favoriteAbilities.map((ability, index) => (
                  <StyledLink
                    key={`${ability.info}Link`}
                    to={`/ability?id=${ability.info}`}
                  >
                    <AbilityItem>{ItemNamesEdit(ability.info)}</AbilityItem>
                    <RemoveAbilityButton
                      onClick={() => handleRemoveFavorite("ability", index)}
                    >
                      Remove
                    </RemoveAbilityButton>
                  </StyledLink>
                ))}
              </AbilityList>
            </FavAbilities>
          )}
        </>
      ) : (
        <NoFavoriteItems />
      )}
    </FavoriteStyledPage>
  );
};
