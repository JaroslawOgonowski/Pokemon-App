import { Main } from "../../Base/Main";
import { AllAbilities } from "./AllAbilities";
import { useScrollToTop } from "../../Common/reusableFunctions/useScrollToTop";
import { TypesList } from "../Types/TypesList";

export const Abilities = () => {
  useScrollToTop();
  return (
    <>
      <div />
      <Main
        titleContent="Abilities"
        articleContentHead="Pokémon possess a wide range of abilities that vary in terms of types, power, and effects. These abilities make them unique and give them an advantage in battles."
        readMoreButton={true}
        articleContentFull="Some Pokémon have offensive abilities that allow them to deal greater damage to opponents. These can include energy-based attacks, the ability to manipulate elements, or the utilization of physical strength. Other offensive abilities involve striking opponents from a distance or up close, as well as speed and precision in attacks.

        Certain Pokémon possess defensive abilities that enable them to avoid or reduce damage. These can include protective abilities that increase the Pokémon's endurance, such as energy shields or enhanced resistance to specific types of attacks. Other defensive abilities involve camouflage, evasiveness, the ability to heal wounds, or reflecting attacks back at the opponent.
        
        Some Pokémon have supportive abilities that can impact their own stats or the stats of opponents. These can include abilities that increase attack power, speed, endurance, or regenerative capabilities. Other supportive abilities can affect the opponent, such as slowing them down, causing confusion, draining energy, or reducing the opponent's accuracy.
        
        In addition to the basic abilities, some Pokémon possess hidden abilities that are harder to find and require special conditions or circumstances. Hidden abilities can grant additional skills, such as ignoring the opponent's defense, receiving boosted attacks under specific conditions, or manipulating the opponent's stats.
        
        In summary, Pokémon abilities are a crucial part of strategy and tactics in battles. The diversity and differences among abilities make each Pokémon unique and require the appropriate approach to fully utilize their potential in combat."
        sideBarText={[
          {
            name: "Bulbapedia- abilities",
            link: "https://bulbapedia.bulbagarden.net/wiki/Ability",
          },
          {
            name: "Pokemon Database- abilities",
            link: "https://pokemondb.net/ability",
          },
        ]}
      />
      <AllAbilities />
    </>
  );
};
