import { Main } from "../../Base/Main";
import { Gallery } from "./Gallery";
import { PokemonContainer } from "./styled";
import { useScrollToTop } from "../../Common/reusableFunctions/useScrollToTop";

export const Pokemon = () => {
  useScrollToTop();
  return (
    <>
      <PokemonContainer>
        <Main
          titleContent="Pokémon"
          articleContentHead={
            "Pokémon, also known as 'Pocket Monsters,' is one of the most recognizable and influential phenomena in the world of\
      ertainment. This Japanese brand, created by Satoshi Tajiri and Ken Sugimori, gained enormous popularity since its\
      debut in 1996.\
      The history of Pokémon runs deep. Tajiri, a passionate bug collector in his childhood,\
      was inspired by the idea of creating games that would allow children to catch and collect\
      creatures. Together with Sugimori, he founded Game Freak, the company\
      that became the creator of Pokémon..."
          }
          readMoreButton={true}
          articleContentFull={
            "The main concept of Pokémon revolves around a trainer who travels the world, captures diverse creatures called Pokémon, and trains them to battle other trainers. There are numerous generations of Pokémon games, each introducing new regions to explore, new Pokémon, and new adventures for players.\
      All Pokémon games are interconnected, and progress can often be transferred from one generation to the next. They are available on various platforms such as Game Boy, Nintendo DS, Switch, and smartphones. By playing Pokémon, gamers can experience thrilling adventures, build strong teams of Pokémon, and compete against other trainers to become a champion.\
      In addition to the games, Pokémon is a massive franchise phenomenon encompassing an animated television series, movies, trading cards, toys, apparel, and many other products. Pokémon characters like Pikachu, Charizard, Bulbasaur, and Squirtle have become icons of pop culture.\
      Pokémon attracts fans from different age groups and countries, thanks to its universal appeal and the ability to unite people around a shared passion. This phenomenon is proof that a simple yet brilliant game concept, combined with adorable characters and an endless array of Pokémon to discover, can transcend the screen and enter the real world.\
      In summary, Pokémon is a story full of fascinating characters, unforgettable adventures, and the opportunity for collecting. This phenomenal world of gaming and entertainment continues to evolve and capture new generations of fans."
          }
          sideBarText={[
            {
              name: "Pokemon Types",
              link: "/Pokemon-App#/types",
            },
            {
              name: "Serebii- national pokedex",
              link: "https://www.serebii.net/pokemon/nationalpokedex.shtml",
            },
            {
              name: "Bulbagarden- pokedex",
              link: "https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number",
            },
            {
              name: "Pokemon database",
              link: "https://pokemondb.net/pokedex/national",
            },
          ]}
        />
        <Gallery />
      </PokemonContainer>
    </>
  );
};
