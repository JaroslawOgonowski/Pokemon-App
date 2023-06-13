import { Article } from "../../Common/Article";
import { SideBar } from "../../Common/SideBar";
import { Title } from "../../Common/Title";
import { ArticleColumn, StyledMain } from "./styled";
import { SideBarTextData } from "../../Common/SideBar";

interface MainProps {
  titleContent: string;
  articleContent: string;
  sideBarText: SideBarTextData[];
}

export const Main = (props: MainProps) => {

  return (
    <>
      <StyledMain>
        <SideBar sideBarText={props.sideBarText} />
        <ArticleColumn>
          <Title titleContent={props.titleContent} />
          <Article articleContent={props.articleContent} />
        </ArticleColumn>
      </StyledMain>
    </>
  )
};