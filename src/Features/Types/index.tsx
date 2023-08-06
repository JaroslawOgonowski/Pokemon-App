import { Main } from "../../Base/Main";
import { useScrollToTop } from "../../Common/reusableFunctions/useScrollToTop";
import { TypesList } from "./TypesList";

export const TypesPage = () => {
  useScrollToTop();
  return (
    <>
      <Main
        titleContent="Types"
        articleContentHead="In games, there are 20 types of Pokémon, each characterized by its own set of statistics, moves, abilities, resistances, and weaknesses. These types play a crucial role in battles, as certain types are strong against others, while others are weak. Understanding and strategizing around these type matchups is key to success in Pokémon battles."
        readMoreButton={false}
        articleContentFull={null}
      />
      <TypesList />
    </>
  );
};
