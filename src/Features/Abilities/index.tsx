import { Error } from "../../Base/Error"
import { Loader } from "../../Base/Loader"
import { Main } from "../../Base/Main"

export const Abilities = () => {
  return (
    <>
      <Main
        titleContent="Abilities"
        articleContentHead="l
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe veniam illum sapiente voluptate reprehenderit eius fugiat doloremque dicta eum perferendis iure obcaecati beatae, corporis accusamus, atque in? Amet, iure iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt a, neque exercitationem assumenda ullam? Doloremque error suscipit unde pariatur, aliquam id, eos in est placeat doloribus, laudantium ducimus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi exercitationem quaerat. Quas sint, nesciunt officia quo magnam nostrum eveniet eum? Delectus perspiciatis amet laudantium necessitatibus dolores nemo veritatis maxime?m"
        readMoreButton={true}
        articleContentFull="zźć"
        sideBarText={
          [
            {
              name: "daeefirst element",
              link: "https://cssgenerator.pl/en/gradient-generator/"
            },
            {
              name: "qeqf second element",
              link: "https://cssgenerator.pl/en/gradient-generator/"
            }
          ]
        }
      />
      <Error />
      <Loader />
    </>
  )
}