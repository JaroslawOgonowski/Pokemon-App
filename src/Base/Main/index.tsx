import { Article } from "../../Common/Article";
import { SideBar } from "../../Common/SideBar";
import { Title } from "../../Common/Title";
import { ArticleColumn, PokemonImage, StyledMain, TitleBox } from "./styled";
import { SideBarTextData } from "../../Common/SideBar";

interface MainProps {
  titleContent: string;
  articleContentHead: string;
  readMoreButton: boolean;
  articleContentFull: string | null;
  sideBarText: SideBarTextData[];
}

export const Main = (props: MainProps) => {
  let randomNumber1 = Math.floor(Math.random() * 1009) + 1;
  let randomNumber2 = Math.floor(Math.random() * 150) + 1;

  return (
    <>
      <StyledMain>
        <SideBar sideBarText={props.sideBarText} />
        <ArticleColumn>
          <TitleBox>
            <PokemonImage key="tilimg1" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber1}.png`}/>
            <Title titleContent={props.titleContent} />
            <PokemonImage key="tilimg2" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber2}.png`} />
          </TitleBox>
          <Article
            articleContentHead={props.articleContentHead}
            readMoreButton={props.readMoreButton}
            articleContentFull={props.articleContentFull}
          />
        </ArticleColumn>
      </StyledMain>
    </>
  )
};