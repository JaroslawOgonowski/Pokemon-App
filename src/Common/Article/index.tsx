import { StyledArticle } from "./styled";

export const Article = ({ articleContent }: { articleContent: string }) => {
return(
  <StyledArticle>{articleContent}</StyledArticle>
)
};