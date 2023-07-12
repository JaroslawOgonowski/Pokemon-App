import { Article } from "../../Common/Article";
import { SideBar } from "../../Common/SideBar";
import { Title } from "../../Common/Title";
import { ArticleColumn, MainBanner, StyledMain } from "./styled";
import { SideBarTextData } from "../../Common/SideBar";

interface MainProps {
  titleContent: string;
  articleContentHead: string;
  readMoreButton: boolean;
  articleContentFull: string | null;
  sideBarText: SideBarTextData[];
}

export const Main = (props: MainProps) => {
  return (
    <>
      <StyledMain key={props.titleContent}>
        <MainBanner>
        <SideBar sideBarText={props.sideBarText} />
        <ArticleColumn>
          <Title titleContent={props.titleContent} />
          <Article
            articleContentHead={props.articleContentHead}
            readMoreButton={props.readMoreButton}
            articleContentFull={props.articleContentFull}
          />
        </ArticleColumn>
        </MainBanner>
      </StyledMain>
    </>
  );
};
