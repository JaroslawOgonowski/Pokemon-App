import { Main } from "../../Base/Main"


export const Pokemon = () => {

  return (
    <Main
      titleContent="Pokémon"
      
      articleContentHead={"Pokémon, also known as 'Pocket Monsters,' is one of the most recognizable and influential phenomena in the world of\
      ertainment. This Japanese brand, created by Satoshi Tajiri and Ken Sugimori, gained enormous popularity since its\
      debut in 1996."}
      readMoreButton={true}
      articleContentFull={"abc"}
      sideBarText={
        [
          {
            name: "first element",
            link: "https://cssgenerator.pl/en/gradient-generator/"
          },
          {
            name: "second element",
            link: "/areas"
          }
        ]
      }
    />
  )
}