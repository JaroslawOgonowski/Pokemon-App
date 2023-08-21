import { Article } from "../../Common/Article";
import { Title } from "../../Common/Title";
import { ArticleColumn, Empty, MainBanner, StyledMain } from "./styled";

interface MainProps {
  titleContent: string;
  articleContentHead: string;
  readMoreButton: boolean;
  articleContentFull: string | null;
}

export const Main = (props: MainProps) => {
  return (
    <>
      <StyledMain key={props.titleContent}>
        <MainBanner>
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
