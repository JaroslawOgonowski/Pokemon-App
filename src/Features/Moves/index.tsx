import { Main } from "../../Base/Main";
import { MovesTable } from "./MovesTable";

export const Moves = () => {
  return (
    <>
      <Main
        titleContent="Moves"
        articleContentHead={
          "Moves in Pokémon games play a crucial role in battle strategy and tactics.\
      Each Pokémon can learn different moves, which can have various types, power, accuracy, and additional effects.\
      Here's a brief summary of the different types of moves that exist in Pokémon games:\
      Offensive Moves: These are moves that deal damage to the opponent.\
      They can have different types, such as Fire, Water, Electric, Grass, Psychic, etc.\
      Offensive moves have a specific power that determines the amount of damage dealt to the opponent.\
      Defensive Moves: Some moves are used for defense and reducing the damage taken from the opponent.\
      These moves can include increasing the Pokémon's defense, raising its stamina, or lowering the opponent's accuracy.\
      Reflective Moves: Certain moves can reflect the opponent's attacks or alter their effects.\
      For example, the move Reflect allows you to bounce back damage,\
      while the move Magic Coat can reflect the opponent's used status - altering effects.\
      Healing Moves: There are also moves that can heal a Pokémon and restore its hit points.\
      These moves can regenerate hit points during battle or restore health outside of battle.\
      Status Moves: Some moves do not deal damage but have other effects on the opponent or alter statistics.\
      For instance, the move Sleep Powder can put the opponent to sleep,\
      while the move Thunder Wave can paralyze the opponent and reduce its accuracy.\
      Moves in Pokémon games are a crucial element of strategy, and choosing the right moves and balancing them can greatly impact success in battles. Well - thought - out move combinations can help gain an advantage over opponents and secure victory in challenging encounters."
        }
        readMoreButton={false}
        articleContentFull={null}
        sideBarText={[
          {
            name: "Bulbapedia- moves",
            link: "https://bulbapedia.bulbagarden.net/wiki/List_of_moves",
          },
          {
            name: "Serebi attackdex",
            link: "https://www.serebii.net/attackdex/",
          },
        ]}
      />
      <MovesTable />
    </>
  );
};
