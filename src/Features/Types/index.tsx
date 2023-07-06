import { Main } from "../../Base/Main";
import { TypesList } from "./TypesList";

export const TypesPage = () => {
  return (
    <>
      <Main
        titleContent="Types"
        articleContentHead=""
        readMoreButton={false}
        articleContentFull={null}
        sideBarText={[
          {
            name: "Fandom -types",
            link: "https://pokemon.fandom.com/wiki/Types",
          },
        ]}
      />
      <TypesList />
    </>
  );
};
