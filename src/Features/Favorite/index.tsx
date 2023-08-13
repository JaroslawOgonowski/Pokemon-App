import React, { useState, useEffect } from "react";
import { Banner, FavMoves, FavoriteStyledPage, Title } from "./styled";
import { PokemonTile } from "../../Common/PokemonTile";
import { PokeAbility } from "../Abilities/AbilityPage/styled";
import { MovesTable } from "../Moves/MovesTable";

interface Pokemon {
  id: number;
  name: string;
  // Inne pola związane z Pokemonem
}

interface Move {
  url: string;
  name: string;
}

interface Ability {
  id: number;
  name: string;
}

interface FavoriteItems {
  category: string;
  info: Pokemon | Move | Ability;
}

export const Favorite = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
  const [favoriteMoves, setFavoriteMoves] = useState<Move[]>([]);
  const [favoriteAbilities, setFavoriteAbilities] = useState<Ability[]>([]);

  useEffect(() => {
    const savedFavFromLocalStorage = localStorage.getItem("savedFav");
    if (savedFavFromLocalStorage) {
      const savedFavParsed = JSON.parse(savedFavFromLocalStorage);
      const favoritePokemons = savedFavParsed.filter(
        (item: FavoriteItems) => item.category === "pokemon"
      ).map((item: FavoriteItems) => item.info as Pokemon);

      const favoriteMoves = savedFavParsed.filter(
        (item: FavoriteItems) => item.category === "move"
      ).map((item: FavoriteItems) => item.info as Move);

      const favoriteAbilities = savedFavParsed.filter(
        (item: FavoriteItems) => item.category === "ability"
      ).map((item: FavoriteItems) => item.info as Ability);

      setFavoritePokemons(favoritePokemons);
      setFavoriteMoves(favoriteMoves);
      setFavoriteAbilities(favoriteAbilities);
    }
  }, []);

  return (
    <FavoriteStyledPage>
      <Banner>
        <Title>Favorite</Title>
      </Banner>
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
      <Title>Favorite moves</Title>
      <FavMoves>
        <MovesTable moveList={favoriteMoves} />
      </FavMoves>
    </FavoriteStyledPage>
  );
};
