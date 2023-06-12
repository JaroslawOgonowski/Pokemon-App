import { Article } from "../../Common/Article";
import { SideBar } from "../../Common/SideBar";
import { Title } from "../../Common/Title";
import { ArticleColumn, StyledMain } from "./styled";

interface MainProps {
  titleContent: string;
  articleContent: string;
  sideBarText: string;
}

export const Main = (props: MainProps) => {

  return (
    <>
      <StyledMain>
        <SideBar sideBarText={props.sideBarText}/>
        <ArticleColumn>
          <Title titleContent={props.titleContent} />
          <Article articleContent={props.articleContent}/>
        </ArticleColumn>
      </StyledMain>
    </>
  )
};