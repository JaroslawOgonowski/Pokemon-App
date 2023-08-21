import React, { useState, useEffect } from "react";
import {
  AbilityDiv,
  Banner,
  FavAbilities,
  FavMoves,
  FavoritePokemons,
  FavoriteStyledPage,
  FirstSection,
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
import { NoFavorites } from "../../Base/NoFavorites";
import { Empty, MainBanner } from "../../Base/Main/styled";

interface FavoriteItems {
  favAdditionalInfo: any;
  category: string;
  info: string;
  additionalInfo: string | null;
}

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

  const handleRemoveFavorite = (category: string, info: string) => {
    const updatedLocalStorage = JSON.parse(
      localStorage.getItem("savedFav") || "[]"
    );

    if (category === "pokemon") {
      const updatedFavorites = [...favoritePokemons];
      const index = updatedFavorites.findIndex(
        (pokemon) => pokemon.info === info
      );
      if (index !== -1) {
        updatedFavorites.splice(index, 1);
        setFavoritePokemons(updatedFavorites);
      }
    } else if (category === "move") {
      const updatedMoves = [...favoriteMoves].filter(
        (move) => move.info !== info
      );
      setFavoriteMoves(updatedMoves);

      updatedLocalStorage
        .map((item: FavoriteItems) => {
          if (item.category === "move" && item.info === info) {
            return null;
          }
          return item;
        })
        .filter(Boolean);
    } else if (category === "ability") {
      const updatedAbilities = favoriteAbilities.filter(
        (ability) => ability.info !== info
      );
      setFavoriteAbilities(updatedAbilities);

      const updatedLocalStorageAbilities = updatedLocalStorage
        .map((item: FavoriteItems) => {
          if (item.category === "ability" && item.info === info) {
            return null;
          }
          return item;
        })
        .filter(Boolean);

      localStorage.setItem(
        "savedFav",
        JSON.stringify(updatedLocalStorageAbilities)
      );
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
            <FirstSection>
              <Empty />
              <FavoritePokemons>
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
                        onClick={() =>
                          handleRemoveFavorite("pokemon", pokemon.info)
                        }
                      >
                        Remove
                      </RemovePokemonButton>
                    </>
                  ))}
                </PokeAbility>
              </FavoritePokemons>
            </FirstSection>
          )}
          {favoriteMoves.length !== 0 && (
            <>
              <FavMoves>
                <Subtitle>Favorite moves table </Subtitle>
                <MovesTable
                  favorite={true}
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
                  <AbilityDiv>
                    <StyledLink
                      key={`${ability.info}Link`}
                      to={`/ability?id=${ability.info}`}
                    >
                      <AbilityItem>{ItemNamesEdit(ability.info)}</AbilityItem>
                    </StyledLink>
                    <RemoveAbilityButton
                      onClick={() =>
                        handleRemoveFavorite("ability", ability.info)
                      }
                    >
                      Remove
                    </RemoveAbilityButton>
                  </AbilityDiv>
                ))}
              </AbilityList>
            </FavAbilities>
          )}
        </>
      ) : (
        <NoFavorites />
      )}
    </FavoriteStyledPage>
  );
};
